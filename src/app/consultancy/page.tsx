import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Approach from "@/components/Home/Approach";
import Testimonial from "@/components/Home/Testimonial";
import Faq from "@/components/Home/Faq";
import Footer from "@/components/Home/Footer";

// Async function to fetch FAQ data
async function fetchFAQ() {
  try {
    const response = await fetch("https://api.applore.in/api/user/getAllQuestions");
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}

// Async function to fetch Testimonial data
async function fetchTestimonials() {
  try {
    const response = await fetch("https://api.applore.in/api/user/getAllTestimonial");
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching Testimonials:", error);
    return [];
  }
}

// Async function to fetch Worked With data
async function fetchWorkedWith() {
  try {
    const response = await fetch("https://api.applore.in/api/user/getAllWorkedWith");
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching Worked With data:", error);
    return [];
  }
}

export default async function Consultancy() {
  // Fetch FAQ, Testimonial, and Worked With data
  const faqData = await fetchFAQ();
  const testimonialData = await fetchTestimonials();
  const workedWithData = await fetchWorkedWith(); // Fetch worked with data

  return (
    <>
      {/* Pass the workedWithData to the HeroSection component */}
      <HeroSection workedWithData={workedWithData} />
      <Services />
      <Approach />
      {/* Pass the fetched testimonial data to the Testimonial component */}
      <Testimonial testimonialData={testimonialData} />
      {/* Pass the fetched FAQ data to the Faq component */}
      <Faq faqData={faqData} />
      <Footer />
    </>
  );
}
