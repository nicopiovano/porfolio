export type ServiceKey =
  | "admin-panels"
  | "online-stores"
  | "personal-websites"
  | "finance-tracking"
  | "online-showroom"
  | "autopilot-web";

/**
 * IMPORTANT:
 * El orden de estas keys debe coincidir con el orden de `t.services.items`
 * en los archivos de i18n (es/en/pt).
 */
export const SERVICE_KEYS: ServiceKey[] = [
  "admin-panels",
  "online-stores",
  "personal-websites",
  "finance-tracking",
  "online-showroom",
  "autopilot-web",
];

export function serviceKeyFromIndex(i: number): ServiceKey | undefined {
  return SERVICE_KEYS[i];
}

export function serviceIndexFromKey(key: ServiceKey): number {
  return SERVICE_KEYS.indexOf(key);
}

