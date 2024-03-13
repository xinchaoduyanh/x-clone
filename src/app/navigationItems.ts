import { FaRegBell } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
import { CiCircleMore } from "react-icons/ci";
const NAVIGATION_ITEMS = [
  {
    title: "Home",
    icon: IoMdHome,
  },
  {
    title: "Explore",
    icon: PiMagnifyingGlassLight,
  },
  {
    title: "Notifications",
    icon: FaRegBell,
  },
  {
    title: "Messages",
    icon: FaRegEnvelope,
  },
  {
    title: "Lists",
    icon: FaRegListAlt,
  },
  {
    title: "Bookmarks",
    icon: PiBookmarkSimpleLight,
  },
  {
    title: "Communities",
    icon: IoPeopleOutline,
  },
  {
    title: "Premium",
    icon: FaXTwitter,
  },
  {
    title: "Profile",
    icon: RxPerson,
  },
  {
    title: "More",
    icon: CiCircleMore,
  },
];
export default NAVIGATION_ITEMS;
