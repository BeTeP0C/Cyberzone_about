import React from "react";
import { Page } from "../Page";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Quation } from "../Quation";
import { OurContacts } from "../OurContacts";
import { Footer } from "../Footer";

export function ContactsPage () {
  return (
    <Page>
      <Header />
      <Hero />
      <Quation />
      <OurContacts />
      <Footer />
    </Page>
  )
}
