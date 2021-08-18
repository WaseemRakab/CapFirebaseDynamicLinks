export interface CapFirebaseDynamicLinksPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
