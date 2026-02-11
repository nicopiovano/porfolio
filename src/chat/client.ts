import { matchIntent } from "./matcher"
import { getResponses } from "./responses"
import type { Lang } from "@/i18n"

export function getChatReply(message: string, lang: Lang) {
  const intent = matchIntent(message, lang)
  const responses = getResponses(lang)
  const response = responses[intent] ?? responses.unknown

  return {
    reply: response.text,
    followUps: response.followUps ?? [],
    intent,
  }
}

