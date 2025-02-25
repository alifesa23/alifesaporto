import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const CV_URL = "https://alifesa23.github.io/public/Resume.pdf";

const BASE_PROMPT = `You are Esa's AI Assistant for his portfolio website. Here's what you need to know about Esa:

Background:
- Full Name: Alif Esa
- Education: Bachelor in Information Systems from Universitas Raharja (2016-2020)
- Current Role: Full-Stack Developer at Dinas Pendidikan Kota Tangerang (January 2023 - Present)

Work Experience:
1. RS Kanker Dharmais (Jan 2024 - Present):
   - Developed AIS (AI Agent Dharmais)
   - Created ATiDar (Blood Transfusion Application)
   - Built Regforis (Hospital Formulary Registration)
   - Developed SiKevin (Patient Finance & Verification System)

2. PD. BATARA MEMBANGUN (Jan 2023 - Dec 2023):
   - Designed engaging landing pages using WordPress CMS
   - Enhanced user engagement and digital footprint
   - Supported online interaction and brand visibility

3. DEKAVAPE (Jun 2020 - Jan 2022):
   - Founded and managed a successful vape shop business
   - Developed Point of Sales (PoS) system
   - Managed MySQL database for inventory

4. TURBO PANEL (Feb 2016 - Feb 2017):
   - Built social media marketing website
   - Integrated social media APIs
   - Managed MySQL database

Organization:
1. Enclavium (Oct 2024 - Present):
   - Developer working on Solana blockchain projects
   - Built various trading and tracking tools

Connect with Esa:
- LinkedIn: linkedin.com/alifesa23/
- GitHub: github.com/alifesa23
- Instagram: @alif.esa
- Twitter: @23antimage

As an AI assistant, you should:
1. Provide accurate information about Esa's background and experience
2. Be professional yet friendly in responses
3. Be concise but informative
4. If asked about personal or sensitive information, politely decline to answer
5. For more detailed information, refer to his CV at ${CV_URL}
6. If unsure about something, suggest contacting Esa directly
7. When asked about connecting with Esa, provide his relevant social media links`;

const chatHistories = new Map();

export async function POST(req: Request) {
    if (req.method !== "POST") {
      return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
    }
  
    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not configured");
      }
      
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { message, isFirstMessage, sessionId = Date.now().toString() } = await req.json();
  
      if (!message) {
        return NextResponse.json({ error: "Message is required" }, { status: 400 });
      }
  
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
      let chat;
      if (chatHistories.has(sessionId)) {
        chat = chatHistories.get(sessionId);
      } else {
        chat = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: BASE_PROMPT }],
            },
            {
              role: "model",
              parts: [
                {
                  text: "I understand my role. I will assist visitors with information about Esa and can refer them to his CV for more details.",
                },
              ],
            },
          ],
        });
        chatHistories.set(sessionId, chat);
      }
  
      const result = await chat.sendMessage([{ text: message }]);
      const response = await result.response;
  
      return NextResponse.json({
        response: response.text(),
        sessionId,
      });
    } catch (error: unknown) {
      // Type check: if error is an instance of Error, we can safely access its properties.
      if (error instanceof Error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal server error", message: error.message }, { status: 500 });
      }
  
      // Fallback if error is not of type Error
      console.error("Unknown error:", error);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
  }
  
