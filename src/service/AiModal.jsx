import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate summary for the text written below: Introduction Intoday' highly competitive job market. possessing szeng technical qualifications alone is no longer Sufficient o secure a desired positon. Employers re increasingly pacing emphasis on a candidate's ability to efectvely communicate present themselves professionally, nd demonstrate confidence. during interviews. In paralel, a well-crafted bio data o curreulum vitae (CV) serves as th foundation of ajob secker's irs impression often determining whether they advance tothe interview stage at all. Therefore. the importance of mastering interview sks and developing an impactful bo data or CV cannot be overstated This project delves nto the essential components of interview preparation and CV building highlighting ther significance i the job application process. The frst part focuses on ntrview ils, encompassing both verbal and non-verbal communication, personal rooming. common interview auestions. and behavioral techniques such as the STAR metho. It ls inludes strotegies to handle stress, how t research the company beforehand, and how t efectively follow up afer an interview. Through interactive exercises ancl mock interviews, the goa 1 to enhance confidence and prepare candidates to respond to various interview scenarios with clarity an pose. The second part of the project centers around the development of a professional bi data or CV, which is often the first opportunity a candidate has to make a strong impression on potential employers. This Section explores the ferences betwen bio data, CV, and resumes, while guiding students though the structure and content of an effective document. From writing a compelling summary to showcasing achievements work experience, skis, and educational qualifications this module ensures that participants can create personalized. polshed, and ob-specitc profes. Together, these two kil sets— interview techniques and CV wring —form the comerstone of creer readiness. This project not oly equips parfiipants with practical knowledge but also encourages them to eflect on their own strengths, se carer goats, and communicate ther value confidently. in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"recipeName\": \"Quick & Easy Bread Pizza Toast\",\n  \"estimatedTime\": \"10-15 minutes\",\n  \"ingredients\": [\n    \"2 slices of bread (any type)\",\n    \"2 tablespoons of tomato sauce or pizza sauce\",\n    \"1/4 cup of shredded cheese (mozzarella, cheddar, or your choice)\",\n    \"Optional toppings: chopped vegetables like bell peppers, onions, mushrooms, or olives; pepperoni or cooked sausage pieces; herbs like dried oregano or basil.\"\n  ],\n  \"instructions\": [\n    \"Preheat your oven's broiler or a toaster oven to a medium-high setting.\",\n    \"Place the bread slices on a baking sheet or toaster oven tray.\",\n    \"Spread the tomato or pizza sauce evenly over the bread slices.\",\n     \"Sprinkle the shredded cheese over the sauce. \",\n    \"Add any optional toppings you like on top of the cheese.\",\n    \"Place the tray under the broiler or in the toaster oven. Broil or toast for 2-5 minutes or until the cheese is melted, bubbly, and lightly browned. Keep a close watch to prevent burning. Remove from oven carefully and let it cool down a bit before eating.\"\n  ]\n}\n```\n"},
          ],
        },
      ],
    });