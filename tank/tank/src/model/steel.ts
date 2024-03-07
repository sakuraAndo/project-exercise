import { images } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract {
    render(): void {
        super.draw()
    }
    image(): HTMLImageElement {
        return images.get('steel')!;
    }
}
