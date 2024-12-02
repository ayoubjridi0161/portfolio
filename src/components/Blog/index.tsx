import { Title } from '../Common/Title';
import { Post } from './Post';
import { PostType } from '@/types/PostType';
import { FC } from 'react';
import { FaReact } from "react-icons/fa";   
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiMicrosoftazure } from "react-icons/si";
import React from 'react';
import { IconCloud } from '@components/cloud';

interface IBlogProps {
  Posts: [PostType];
}

export const Blog: FC<IBlogProps> = ({ Posts }) => {
  const Icons = [<FaReact/>,<TbBrandNextjs/>,<BiLogoPostgresql/>,<TbBrandCpp/>,<SiTypescript/>,<FaGitAlt/>,<AiOutlineDotNet/>,<SiMicrosoftazure/>]
  return (
    <div
      className="flex flex-col items-center justify-center md:justify-start md:items-start max-w-7xl w-full mx-auto p-5 md:p-0"
      id="blog"    >
      <Title num={3} title="Skills" />

      <div className="flex gap-5  justify-center w-full mt-1">
      <IconCloud  iconSlugs={["git","nextjs","azure",'amazonaws', 'typescript','c','cpp','java','dotnet','google','php','angular','springboot',
  'vercel','redux','reactrouter',  'visualstudiocode','python','rust','node','cisco','tcp/ip','figma','vhdl',
  'arduino',   'react','t-shirt','bmw','mercedes','audi','brabus','porsche','microsoft','yahoo','hotmail',
  'cloud9','wireshark',  'sql','shell','tunisia','USA',  'svelte',  'React','office','playwright','Angular','jira','clickup',
  'slack','opera','cursor','eclipse','intellij','linux','cmd',  'ubuntu','kali','debian','vmware','opencv','openstack','openssl',
  'Vue.js', 'Svelte','aftereffect','jenkins','gitlab','nvidia','intel','amd','dart','flutter','iphone','swift','xd','scrapy',
  'pytorch','photoshop','meta','netflix','instagram','facebook','tinder','whatsapp','X','tinder','discord','tesla', 'Heroku','GCP',
  'WebAssembly','assembly','GraphQL','Serverless ','c++','vhdl','django','adobe',
  ,'mongodb','PostgreSQL','Firebase','apache','Nginx','docker','swagger','postman','rest','postwoman','Hoppscotch']} />

      </div>
      
    </div>
  );
};
