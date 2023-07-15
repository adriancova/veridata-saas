// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import type { Handlers, PageProps } from '$fresh/server.ts';
import { INPUT_STYLES } from '@/utils/constants.ts';
import { calcLastPage, calcPageNum, PAGE_LENGTH } from '@/utils/pagination.ts';
import type { State } from './_middleware.ts';
import {
  compareScore,
  getAllItems,
  getAreVotedBySessionId,
  getItemsSince,
  getManyUsers,
  type Item,
  type User,
} from '@/utils/db.ts';
import { DAY, WEEK } from 'std/datetime/constants.ts';
import Hero from '../components/Hero.tsx';
import About from '../components/About.tsx';
import Pricing from '../components/Pricing.tsx';
import FAQ from '../components/FAQ.tsx';
import Contact from '../components/Contact.tsx';
import Meta from '../components/Meta.tsx';
import Navbar from '../islands/NavBar.tsx';

interface HomePageData extends State {
  itemsUsers: User[];
  items: Item[];
  lastPage: number;
  areVoted: boolean[];
}

function calcTimeAgoFilter(url: URL) {
  return url.searchParams.get('time-ago');
}

export const handler: Handlers<HomePageData, State> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const pageNum = calcPageNum(url);
    const timeAgo = calcTimeAgoFilter(url);
    let allItems: Item[];
    if (timeAgo === 'week' || timeAgo === null) {
      allItems = await getItemsSince(WEEK);
    } else if (timeAgo === 'month') {
      allItems = await getItemsSince(30 * DAY);
    } else {
      allItems = await getAllItems();
    }

    const items = allItems
      .toSorted(compareScore)
      .slice((pageNum - 1) * PAGE_LENGTH, pageNum * PAGE_LENGTH);

    const itemsUsers = await getManyUsers(items.map(item => item.userId));

    const areVoted = await getAreVotedBySessionId(items, ctx.state.sessionId);
    const lastPage = calcLastPage(allItems.length, PAGE_LENGTH);

    return ctx.render({ ...ctx.state, items, itemsUsers, areVoted, lastPage });
  },
};

function TimeSelector() {
  return (
    <div class='flex justify-center my-4 gap-2'>
      {/* These links do not preserve current URL queries. E.g. if ?page=2, that'll be removed once one of these links is clicked */}
      <a class={INPUT_STYLES} href='/?time-ago=week'>
        Last Week
      </a>
      <a class={INPUT_STYLES} href='/?time-ago=month'>
        Last Month
      </a>
      <a class={INPUT_STYLES} href='/?time-ago=all'>
        All time
      </a>
    </div>
  );
}

export default function HomePage(props: PageProps<HomePageData>) {
  return (
    <>
      <Meta href={props.url.href} />

      <Navbar session={props.session} />
      <Hero />
      <About />
      <FAQ />
      <Pricing />
      <Contact />
    </>
  );
}
