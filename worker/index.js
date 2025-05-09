const facts = [
    "I'm a Division I track & field athlete specializing in the 400m hurdles.",
    "I speak Spanish and Italian fluently.",
    "I'm majoring in Artificial Intelligence at Long Island University.",
    "I interned at Intu Global and contributed to AI and computer vision projects.",
    "I combine my passion for sports and technology through data-driven performance analysis.",
    "I led a consulting team for Mango through the LIU-iQ program.",
    "I’m passionate about building ethical, people-centered AI systems."
  ];
  
  export default {
    async fetch(request) {
      const url = new URL(request.url);
  
      // Allow CORS for all origins (or you can specify your .pages.dev domain)
      const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type"
      };
  
      if (url.pathname === "/fact") {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        return new Response(JSON.stringify({ fact: randomFact }), {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      }
  
      return new Response("Not found", {
        status: 404,
        headers: corsHeaders
      });
    }
  };
  
