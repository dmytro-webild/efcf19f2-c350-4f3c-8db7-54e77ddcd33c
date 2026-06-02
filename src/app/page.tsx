"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Briefcase, FileText, Lightbulb, ListChecks, MessageCircle, Smartphone, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="circleGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Apps",
          id: "#features",
        },
        {
          name: "Blog",
          id: "#blog",
        },
        {
          name: "FAQs",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/overhead-view-light-bulb-closed-spiral-notebooks-office-appliances-left-side-white-surface_140725-94254.jpg"
      logoAlt="UrduEarnHub Pro Logo"
      brandName="UrduEarnHub Pro"
      bottomLeftText="Online Paisa Guide"
      bottomRightText="UrduEarnHub@gmail.com"
      button={{
        text: "Start Earning",
        href: "#hero",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "glowing-orb",
      }}
      title="Mobile se Online Paisa Kamana Seekho"
      description="UrduEarnHub Pro par aap seekhenge choti online jobs, earning apps, aur daily tips, jo aapko mobile se real income generate karne me madad karengi."
      testimonials={[
        {
          name: "Bilal Ahmed",
          handle: "@Bilal_Earns",
          testimonial: "UrduEarnHub Pro ne meri online earning journey ko bohot asaan bana diya. Ab main mobile se achi income kar raha hoon!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-posing-street_23-2148213468.jpg",
          imageAlt: "Bilal Ahmed",
        },
        {
          name: "Sara Khan",
          handle: "@SaraOnline",
          testimonial: "Inki tips aur guides lajawab hain! Main ne kuch hi dinon me apni pehli online income generate ki. Highly recommended!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-man-studying-with-laptop_23-2149105731.jpg",
          imageAlt: "Sara Khan",
        },
        {
          name: "Ali Raza",
          handle: "@AliTechPro",
          testimonial: "Mai ne socha bhi nahi tha ke WhatsApp se itna paisa kamaya ja sakta hai. UrduEarnHub Pro ka shukriya!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-with-smartphone_23-2148294016.jpg",
          imageAlt: "Ali Raza",
        },
        {
          name: "Ayesha Siddiqui",
          handle: "@AyeshaDigital",
          testimonial: "Students ke liye best platform hai. Part-time me earning ka rasta mil gaya. Thank you team!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-going-vacation-looking-his-credit-card-buying-tickets-online-booking-hotel_1258-270369.jpg",
          imageAlt: "Ayesha Siddiqui",
        },
        {
          name: "Usman Javed",
          handle: "@UsmanEarning",
          testimonial: "Fiverr gig banane me madad mili aur ab orders bhi aa rahe hain. Detailed guides bohot useful hain.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-pretty-curly-haired-lady-showing-thumb-up-park_1262-20821.jpg",
          imageAlt: "Usman Javed",
        },
      ]}
      tag="Urdu Earning Hub"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "Start Earning",
          href: "#blog",
        },
        {
          text: "Free Apps",
          href: "#features",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-boy-smiling_23-2149260611.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/friendly-outgoing-goodlooking-female-asian-coworker-chatting-girlfriend-smiling-joyfully-have-pleasa_1258-114683.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-handsome-indian-businessman-talking-mobile-phone-modern-office_231208-2555.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-successful-businesswoman-with-charming-smile-posing-street-with-interesting-architecture-background_613910-3354.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-man-outdoors-portrait_158595-3552.jpg",
          alt: "Handsome man outdoors portrait",
        },
      ]}
      avatarText="50,000+ Students Already Earning"
      imageSrc="http://img.b2bpic.net/free-photo/smartphone-with-money-credit-card-wallet_23-2148080971.jpg?_wi=1"
      imageAlt="Mobile Online Earning Concept"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "Online Earning Seekhein",
        },
        {
          type: "text-icon",
          text: "Latest Tips",
          icon: Lightbulb,
        },
        {
          type: "text",
          text: "Zero Investment",
        },
        {
          type: "text-icon",
          text: "Daily Guides",
          icon: Sparkles,
        },
        {
          type: "text",
          text: "Real Money",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="UrduEarnHub Pro: Aapka Online Earning Guide"
      description={[
        "UrduEarnHub Pro ek aisa platform hai jahan hum mobile se online earning, freelancing aur blogging tips share karte hain.",
        "Hamara maqsad beginners ko zero investment se online earning start karwana hai, simple aur asaan Urdu zuban me.",
      ]}
      buttons={[
        {
          text: "Hamare Bare Mein",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "WhatsApp Earning Secrets",
          description: "WhatsApp groups aur affiliate links se earning ke tarike.",
          icon: MessageCircle,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/seashells-chalk-boards-bright-surface_23-2148149515.jpg",
              imageAlt: "WhatsApp Earning",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/young-women-scanning-qr-code-cafeteria_23-2149321653.jpg",
              imageAlt: "WhatsApp Earning",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-light-bulb-closed-spiral-notebooks-office-appliances-left-side-white-surface_140725-94254.jpg",
          imageAlt: "WhatsApp earning affiliate marketing",
        },
        {
          title: "Free Earning Apps Guide",
          description: "Top free apps jo aapko real paise deti hain, unke reviews aur tricks.",
          icon: Smartphone,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/image-korean-successful-corporate-woman-showing-money-dollars-smartphone-app-screen-interface-mobile-phone-application-concept-investment-finance-pink-background_1258-97321.jpg",
              imageAlt: "Free Earning Apps",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-handsome-man-showing-smartphone-app-screen-credit-card_176420-20500.jpg",
              imageAlt: "Free Earning Apps",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/smartphone-with-money-credit-card-wallet_23-2148080971.jpg?_wi=2",
          imageAlt: "WhatsApp earning affiliate marketing",
        },
        {
          title: "YouTube Shorts Mastery",
          description: "Views se monetization tak, YouTube Shorts se paisa kamane ka complete guide.",
          icon: Star,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-grumpy-man-holding-tickets-passport-has-laptop-opened-looking-concerned-angry_1258-270321.jpg",
              imageAlt: "YouTube Shorts Earning",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-holding-notebook_23-2148845382.jpg",
              imageAlt: "YouTube Shorts Earning",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-boy-smiling_23-2149260611.jpg",
          imageAlt: "WhatsApp earning affiliate marketing",
        },
        {
          title: "Mobile Freelancing Jobs",
          description: "Mobile phone se asaan freelancing jobs, typing aur micro tasks.",
          icon: Briefcase,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-working-as-economist_23-2150132309.jpg",
              imageAlt: "Mobile Freelancing",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-happy-girl_171337-2584.jpg",
              imageAlt: "Mobile Freelancing",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/friendly-outgoing-goodlooking-female-asian-coworker-chatting-girlfriend-smiling-joyfully-have-pleasa_1258-114683.jpg",
          imageAlt: "WhatsApp earning affiliate marketing",
        },
        {
          title: "Data Entry Basics",
          description: "Beginners ke liye simple data entry jobs, Excel sheets aur form filling.",
          icon: FileText,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-friends-working-with-computer-laptop-together_53876-30145.jpg",
              imageAlt: "Data Entry",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/view-messy-office-workspace-with-laptop-device_23-2150282029.jpg",
              imageAlt: "Data Entry",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-indian-businessman-talking-mobile-phone-modern-office_231208-2555.jpg",
          imageAlt: "WhatsApp earning affiliate marketing",
        },
        {
          title: "Fiverr Success Formula",
          description: "Fiverr par account kaise banayein, gigs kaise create karein aur orders kaise hasil karein.",
          icon: ListChecks,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/wow-new-mobile-phone-amazing-impressed-astonished-goodlooking-curlyhaired-female-red-dress-ho_1258-143031.jpg",
              imageAlt: "Fiverr Success",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-dollar-bills-laptop-money-making-concept_169016-26917.jpg",
              imageAlt: "Fiverr Success",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-successful-businesswoman-with-charming-smile-posing-street-with-interesting-architecture-background_613910-3354.jpg",
          imageAlt: "WhatsApp earning affiliate marketing",
        },
      ]}
      title="Hum Kya Offer Karte Hain"
      description="Seekhen online earning ke sab se asaan aur effective tarike."
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Latest Earning Guides"
      description="Hamare naye articles aur guides ke sath online earning me expert banein."
      blogs={[
        {
          id: "1",
          category: "WhatsApp Earning",
          title: "WhatsApp Se Paise Kaise Kamaye (2026 Guide)",
          excerpt: "Aaj ke time me WhatsApp sirf chatting app nahi hai, is se earning bhi hoti hai. Aap affiliate links share karke, groups me products promote karke aur digital services dekar paisa kama sakte ho.",
          imageSrc: "http://img.b2bpic.net/free-photo/entrepreneur-holding-smartphone-with-greenscreen-template_482257-88027.jpg",
          imageAlt: "WhatsApp Earning Guide",
          authorName: "UrduEarnHub Pro",
          authorAvatar: "http://img.b2bpic.net/free-photo/man-isolated-showing-facial-emotions_1303-20265.jpg",
          date: "Jan 1, 2026",
        },
        {
          id: "2",
          category: "Free Apps",
          title: "Free Apps Jo Real Paise Deti Hain",
          excerpt: "Swagbucks, ClipClaps, Mistplay, InboxDollars jese apps me videos dekh kar aur tasks complete karke earning hoti hai.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-businessman-holding-bitcoin_171337-380.jpg",
          imageAlt: "Free Earning Apps",
          authorName: "UrduEarnHub Pro",
          authorAvatar: "http://img.b2bpic.net/free-photo/close-up-portrait-beautiful-young-woman-with-ginger-hair-clean-healthy-skin_273609-8996.jpg",
          date: "Jan 5, 2026",
        },
        {
          id: "3",
          category: "YouTube Earning",
          title: "YouTube Shorts Se Earning Ka Tarika",
          excerpt: "Short videos bana kar views grow karo, monetization enable karo aur affiliate links add karo.",
          imageSrc: "http://img.b2bpic.net/free-photo/profit-income-earning-financial-money-proceeds-concept_53876-132220.jpg",
          imageAlt: "YouTube Shorts Earning",
          authorName: "UrduEarnHub Pro",
          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-old-man-indoors_23-2151038818.jpg",
          date: "Jan 10, 2026",
        },
        {
          id: "4",
          category: "Mobile Earning",
          title: "Mobile Se Online Earning Ka Asaan Tarika",
          excerpt: "Sirf mobile, internet aur consistency se freelancing, typing jobs aur micro tasks try karke online earning start karo.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-menstrual-cup_23-2149390213.jpg",
          imageAlt: "Mobile Earning Tips",
          authorName: "UrduEarnHub Pro",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-smiling-business-woman-white-background_231208-14003.jpg",
          date: "Jan 15, 2026",
        },
        {
          id: "5",
          category: "Data Entry",
          title: "Data Entry Jobs Online (Beginners ke liye)",
          excerpt: "Simple typing work hota hai jaise Excel sheets fill karna, forms complete karna aur small tasks websites par kaam karna.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-female-with-pinkish-hair-posing_344912-828.jpg",
          imageAlt: "Data Entry Jobs",
          authorName: "UrduEarnHub Pro",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-man-cartoon-style_23-2151134012.jpg",
          date: "Jan 20, 2026",
        },
        {
          id: "6",
          category: "Freelancing",
          title: "Fiverr Pe Account Kaise Banaye",
          excerpt: "Fiverr.com open karo, email se signup karo aur logo design ya typing jese gigs create karo.",
          imageSrc: "http://img.b2bpic.net/free-photo/impressed-young-student-boy-sitting-desk-with-school-tools-showing-pray-gesture_141793-80844.jpg",
          imageAlt: "Fiverr Guide",
          authorName: "UrduEarnHub Pro",
          authorAvatar: "http://img.b2bpic.net/free-photo/young-beautiful-smiling-female-trendy-summer-red-dress-sexy-carefree-woman-posing-near-blue-wall-studio-positive-model-having-fun-cheerful-happy-isolated_158538-25754.jpg",
          date: "Jan 25, 2026",
        },
        {
          id: "7",
          category: "Blogging",
          title: "Blogging Se Paise Kaise Kamaye",
          excerpt: "Free Blogger site banao, daily posts likho aur AdSense apply karke earning start karo.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-beach_23-2148588776.jpg",
          imageAlt: "Blogging Guide",
          authorName: "UrduEarnHub Pro",
          authorAvatar: "http://img.b2bpic.net/free-photo/young-handsome-man-wearing-casual-clothes-with-happy-cool-smile-face-lucky-person_839833-3198.jpg",
          date: "Jan 30, 2026",
        },
        {
          id: "8",
          category: "Students",
          title: "Students Ke Liye Online Earning Ideas",
          excerpt: "Typing jobs, freelancing aur affiliate marketing jese ideas students ke liye best online earning options hain.",
          imageSrc: "http://img.b2bpic.net/free-photo/pensive-curly-haired-woman-writes-down-information-notebook-drinks-coffee-watches-tutorial-video-via-laptop-computer-wears-coat-poses-against-city-buildings_273609-55775.jpg",
          imageAlt: "Student Earning Ideas",
          authorName: "UrduEarnHub Pro",
          authorAvatar: "http://img.b2bpic.net/free-photo/smiling-woman-using-tablet-drinking-coffee-cafe_1262-19072.jpg",
          date: "Feb 4, 2026",
        },
        {
          id: "9",
          category: "Instagram Earning",
          title: "Instagram Se Paisa Kaise Kamaye",
          excerpt: "Instagram page grow karo, shoutouts do aur affiliate links lagao.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-girl-posing_23-2148544235.jpg",
          imageAlt: "Instagram Earning",
          authorName: "UrduEarnHub Pro",
          authorAvatar: "http://img.b2bpic.net/free-photo/senior-man-purple-shirt-looking-camera-happy-excited-clenching-fists-standing-blue-background_141793-118165.jpg",
          date: "Feb 9, 2026",
        },
        {
          id: "10",
          category: "Business Ideas",
          title: "Zero Investment Online Business Ideas",
          excerpt: "Blogging, YouTube channel aur freelancing services jese businesses zero investment ke sath shuru kiye ja sakte hain.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-economy-concept_23-2148547916.jpg",
          imageAlt: "Zero Investment Business",
          authorName: "UrduEarnHub Pro",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67073.jpg",
          date: "Feb 14, 2026",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "50,000+",
          title: "Happy Learners",
          items: [
            "Har mahine naye users",
            "Online earning seekers",
          ],
        },
        {
          id: "2",
          value: "₹1 Crore+",
          title: "Earning Facilitated",
          items: [
            "Hamari tips se kamae gaye paise",
            "Community earnings",
          ],
        },
        {
          id: "3",
          value: "500+",
          title: "Expert Guides",
          items: [
            "Har topic par detailed guides",
            "Naye earning strategies",
          ],
        },
      ]}
      title="Hamari Community Ke Numbers"
      description="Hamare saath jud kar hazaron log online earning kar rahe hain. Aap bhi shamil hon!"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Fatima Noor",
          handle: "@FatimaBlogs",
          testimonial: "Blogging ke liye inke tips ne mera kaam bohot asaan kar diya. AdSense approval bhi jaldi mil gaya!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-skeptical-disappointed-b_1258-95746.jpg",
          imageAlt: "Fatima Noor",
        },
        {
          id: "2",
          name: "Hassan Malik",
          handle: "@HassanFreelance",
          testimonial: "Data entry jobs ki perfect guidance. Main ab ghar baithe freelancing kar raha hoon.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-expressive-young-man_273609-6853.jpg",
          imageAlt: "Hassan Malik",
        },
        {
          id: "3",
          name: "Amna Shah",
          handle: "@AmnaApps",
          testimonial: "Free apps ki list aur unse earning ke tarike, sab ek jagah mil gaye. UrduEarnHub Pro best hai.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-mixed-race-woman-has-shy-satisfied-expression-smiles-broadly-shows-white-teeth-wears-orange-bow-headband-knitted-sweater_273609-33430.jpg",
          imageAlt: "Amna Shah",
        },
        {
          id: "4",
          name: "Zain Ali",
          handle: "@ZainSmart",
          testimonial: "YouTube Shorts se earning ka poora process seekha, aur ab mere views bhi barh rahe hain.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-indigenous-person-integrating-society_23-2151102474.jpg",
          imageAlt: "Zain Ali",
        },
        {
          id: "5",
          name: "Rida Hassan",
          handle: "@RidaEarn",
          testimonial: "Zero investment ideas ne meri soch badal di. Ab main apna online business run kar rahi hoon.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/labor-union-members-working-together_23-2150994999.jpg",
          imageAlt: "Rida Hassan",
        },
        {
          id: "6",
          name: "Jawad Khan",
          handle: "@JawadMoney",
          testimonial: "Har tip practical aur easy to understand hai. Mobile se earning ka best source.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-dress-code-wearing-grey-jacket_114579-19026.jpg",
          imageAlt: "Jawad Khan",
        },
      ]}
      showRating={true}
      title="Humare Users Kya Kehte Hain"
      description="UrduEarnHub Pro se milne wali success stories."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "Online Earning Kaise Start Karein?",
          content: "Mobile phone aur internet connection se aap micro jobs, freelancing ya affiliate marketing se shuru kar sakte hain. Hamari guides aapki madad karengi.",
        },
        {
          id: "faq-2",
          title: "Kya Investment Zaroori Hai?",
          content: "Nahi, bohot se online earning methods zero investment se start ho sakte hain, jaise blogging ya YouTube channel banana. Hum un methods par zyada focus karte hain.",
        },
        {
          id: "faq-3",
          title: "Kitna Paisa Kama Sakte Hain?",
          content: "Ye aapki mehnat aur consistency par depend karta hai. Kuch log part-time me hazaron, aur kuch full-time me lakhon kama sakte hain.",
        },
        {
          id: "faq-4",
          title: "Kon se Apps Real Paise Dete Hain?",
          content: "Swagbucks, ClipClaps, Mistplay jese verified apps real earning options provide karte hain. Hamari website par detailed reviews majood hain.",
        },
        {
          id: "faq-5",
          title: "AdSense Approval Kaise Milta Hai?",
          content: "Apni website par high-quality content post karein, privacy policy jaise zaroori pages banayein aur regular traffic layein. Consistency bohot important hai.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/image-man-cafe-coffee-shop-visitor-sitting-chair-with-laptop-smartphone-looking_1258-245417.jpg"
      imageAlt="FAQ Section Image"
      mediaAnimation="slide-up"
      title="Aapke Sawal, Hamare Jawab"
      description="Online earning se related common questions ke jawab yahan majood hain."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Contact Us"
      title="Mazed Earning Tips Hasil Karen"
      description="Hamari newsletter subscribe karein aur daily naye earning tips, apps aur guides sidhe apne inbox me payein."
      imageSrc="http://img.b2bpic.net/free-photo/confident-young-man-filming-his-video-blog-episode_171337-5532.jpg"
      imageAlt="Newsletter Signup"
      mediaAnimation="slide-up"
      inputPlaceholder="Apna Email Darj Karein"
      buttonText="Subscribe Karo"
      termsText="Subscribe karke aap hamari Terms and Conditions se sehmat hain."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/building-night-with-windows-illuminated-with-red-white-lights_23-2151966506.jpg"
      imageAlt="Digital background"
      logoText="UrduEarnHub Pro"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "Apps",
              href: "#features",
            },
            {
              label: "Blog",
              href: "#blog",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Disclaimer",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/urduearnhub",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/urduearnhub",
            },
            {
              label: "TikTok",
              href: "https://tiktok.com/@urduearnhub",
            },
          ],
        },
      ]}
      copyrightText="© 2026 UrduEarnHub Pro | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
