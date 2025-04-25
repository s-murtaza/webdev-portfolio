import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import ZeplinIcon from "public/assets/svg/zeplin.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

export const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS/TS", icon: <IoLogoJavascript size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "AntD", icon: <AiOutlineAntDesign size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "ShadCn", icon: <ChakraIcon width={32} /> },
		]
	},
	{
		category: "Back-end",
		items: [
			{ name: "NodeJs", icon: <FaNodeJs size={32} /> },
			{ name: "ExpressJS", icon: <ZeplinIcon width={36} /> },
			{ name: "NestJs", icon: <AdobeXDIcon width={32} /> },
			{name: "PostgreSQL"}
		]
	},
	{
		category: "Deployments",
		items: [
			{ name: "AWS", icon: <FaAws size={32} /> },
			{ name: "Vercel", icon: <JiraIcon width={32} /> },
			{ name: "Docker", icon: <FaTrello size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{name: "DigitalOcean"}
		]
	}
];
