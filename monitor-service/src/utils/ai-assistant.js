import OpenAI from 'openai'
import { OPEN_AI_API, OPEN_AI_ORGANIZATION } from "../config/env-vars.js";

const openai = new OpenAI({
    apiKey: OPEN_AI_API,
    organization: OPEN_AI_ORGANIZATION
});


export const defineSoftwareCategory = async (app, categories) => {
    try {
        const promptString = `defines which of these categories: "${categories}", this application belongs to: "${app}", I just want you to tell me the category. I only need you to return ONLY 1 word. nothing else!`
        const stream = await openai.completions.create({
            model: "text-davinci-002",
            prompt: promptString,
            max_tokens: 10,
            temperature: 0.7
        });
        const appCategory = stream.choices[0].text.trim();
        return appCategory
    } catch (error) {
        console.error(error);
        return null
    }
}

/** 
 * defineSoftwareCategory(
    'Leage of Legends',
    'Game, Education, Productivity, Social Networking, Development Tools, Entertainment'
);
*/

