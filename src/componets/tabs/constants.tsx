import { Calendar } from "../../pages/calendar";
import { Headlines } from "../../pages/headlines";
import { EventWatch } from "../../pages/eventWatch";
import { ITab } from "./types";
import { AskTheDesk } from "../../pages/askTheDesk";
import { RadarFilers } from "../../pages/radarFilers";
import { TopStories } from "../../pages/topStories";
import { MorningReport } from "../../pages/morningReport";
import { Profile } from "../../pages/profile";
import { SupportCenter } from "../../pages/supportCenter";

export const MAINTABS: ITab[] = [
  { label: "Headlines", key: "headlines", component: <Headlines /> },
  { label: "Calendar", key: "calendar", component: <Calendar /> },
  {
    label: "Event Watch",
    key: "event_watch",
    component: <EventWatch />,
  },
  {
    label: "Ask The Desk",
    key: "ask_the_desk",
    component: <AskTheDesk />,
  },
  {
    label: "13F-Radar: Filers",
    key: "radar_filers",
    component: <RadarFilers />,
  },
  {
    label: "Top Stories",
    key: "top_stories",
    component: <TopStories />,
  },
  {
    label: "Morning Report",
    key: "morning_report",
    component: <MorningReport />,
  },
  { label: "Profile", key: "profile", component: <Profile /> },
  {
    label: "Support center",
    key: "support_center",
    component: <SupportCenter />,
  },
];
