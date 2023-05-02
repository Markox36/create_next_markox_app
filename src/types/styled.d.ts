import type { Globals } from "./ui/globals";
import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme extends Globals {}
}
