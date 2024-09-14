import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import LogoImage from "images/logo-unl-only.svg";
import LogoNameImage from "images/logo-unl-name.svg";

import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-20 mr-4`;
const LogoNameImg = tw.img`w-48`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/">Home</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#"></Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#"></Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#"></Link>
              </LinkListItem>
              {/* <LinkListItem>
                <Link href="/faqs">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/contact-us">Contact</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/about-us">About Us</Link>
              </LinkListItem> */}
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Products</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="https://linensandlayers.ph/products/unbranded-lab-minimalist-a6-notebook-planner-bullet-journal-dotted-ruled">A6 Notebook</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://shopee.ph/Unbranded-Lab-Primo-Minimalist-Bifold-Leather-Wallet-Crazy-Horse-Full-grain-leather-i.492151255.23075715384">Primo Leather Wallet</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://shopee.ph/Unbranded-Lab-Suprimo-Minimalist-Bifold-Leather-Wallet-Italian-full-grain-leather-i.492151255.14299516432">Suprimo Premium Leather Wallet</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://linensandlayers.ph/products/unbranded-lab-white-unisex-lab-coat-lab-gown-laboratory-coat-for-adult">Laboratory Coat</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://linensandlayers.ph/products/unbranded-lab-bedding-set-fitted-sheet-bed-sheet-white-stripes-sheet-with-pillowcase-250-thread-count">Bed Sheet</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://linensandlayers.ph/products/unbranded-lab-unisex-white-school-polo-uniform-straight-cut-katrina">School Uniform</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://shopee.ph/Plain-Canvas-Tote-Bag-Shoulder-Bag-with-Base-Natural-Color-i.12679069.18967512169">Tote Bag</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://linensandlayers.ph/products/unbranded-lab-multi-purpose-flannel-cloth-100-cotton-dusting-cleaning-polishing">Flannel Cloths</Link>
              </LinkListItem>
            </LinkList>
          </Column>

          <Column>
            <ColumnHeading>Social</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="https://facebook.com/unbrandedlabph">Facebook</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://instagram.com/unbrandedlabph">Instagram</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://youtube.com/@unbrandedlabph">YouTube</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#"></Link>
              </LinkListItem>
              {/* <LinkListItem>
                <Link href="https://twitter.com/unbrandedlabph">Twitter</Link>
              </LinkListItem> */}
            </LinkList>
          </Column>

          <Column>
            <ColumnHeading>Dealers</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="https://linensandlayers.ph">Linens and Layers</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#"></Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#"></Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#"></Link>
              </LinkListItem>
            </LinkList>
          </Column>

          {/* FIXME: EGO - UNUSED BLOCK */}
          {/* <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">GDPR</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Privacy Policy</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Terms of Service</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Disclaimer</Link>
              </LinkListItem>
            </LinkList>
          </Column> */}

          {/* FIXME: EGO - TODO BLOCK */}
          {/* <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
              <SubscribeText>
                Subscribe to our mailing list for insider news, product launches, and more.
              </SubscribeText>
              <SubscribeForm method="get" action="#">
                <Input type="email" placeholder="Your Email Address" />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn> */}

        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoNameImg src={LogoNameImage} />
          </LogoContainer>
          <CopywrightNotice>&copy; 2023 Unbranded Lab. All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com/unbrandedlabph">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://instagram.com/unbrandedlabph">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com/@unbrandedlabph">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
