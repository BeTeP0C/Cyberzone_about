import React from "react";
import { Page } from "../Page";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Contacts } from "../Contacts";
import { Departments } from "../Departments";
import { Want } from "../Want";
import { Socials } from "../Socials";
import { Gallery } from "../Gallery";
import { Footer } from "../Footer";

export function AboutPage() {
  return (
    <Page>
      <Header />
      <Hero />
      <Contacts />
      <Departments />
      <Want />
      <Socials />
      <Gallery />
      <Footer />
    </Page>
  );
}
