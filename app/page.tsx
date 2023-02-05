"use client";

import { Inter } from "@next/font/google";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const MainTitle = styled.h1`
  font-size: 3.052rem;
`;

export default function Home() {
  return (
    <main>
      <MainTitle>Hello World 👋</MainTitle>
    </main>
  );
}
