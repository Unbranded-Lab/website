import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        // heading={<>Compact, Stylish & Minimalist <HighlightedText>In Your Pocket.</HighlightedText></>}
        heading={<>High-quality, Stylish & Minimalist</>}
        description={
          <Description>
            The Suprimo premium bifold leather wallet is compact but roomy enough to hold various cards and bills in your front pocket.
            <br/><br/>
            Made using Pueblo vegetable tanned leather, from the famous Badalassi Carlo tannery in Italy, exuding a unique textured looking surface that can easily acquire a dark patina.
          </Description>
        }
        imageSrc="products/suprimo.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://shopee.ph/Unbranded-Lab-Suprimo-Minimalist-Bifold-Leather-Wallet-Italian-full-grain-leather-i.492151255.14299516432"
        watchVideoButtonText="Meet Suprimo"
      />

      <MainFeature
        subheading={<Subheading>  </Subheading>}
        heading={
          <>
            More affordable yet high-quality
          </>
        }
        description={
          <Description>
            The Primo minimalist bifold leather wallet is the classic version of Suprimo that is made from crazy horse full-grain leather sourced locally in the Philippines.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://shopee.ph/Unbranded-Lab-Primo-Minimalist-Bifold-Leather-Wallet-Crazy-Horse-Full-grain-leather-i.492151255.23075715384"
        imageSrc={
          "products/primo.jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      {/* FIXME: EGO - UNUSED BLOCK */}
      {/* <MainFeature
        subheading={<Subheading>Established Since 2014</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectefatur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      /> */}

      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Check out our <HighlightedText>products</HighlightedText>
          </>
        }
      />

      {/* FIXME: EGO - UNUSED BLOCK */}
      {/* <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      /> */}

      {/* FIXME: EGO - UNUSED BLOCK */}
      {/* <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      /> */}

      <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Feedback</HighlightedText></>}
      />

      {/* FIXME: EGO - UNUSED BLOCK */}
      {/* <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
}
