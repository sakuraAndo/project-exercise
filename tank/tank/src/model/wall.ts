import { images } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract {
    image(): HTMLImageElement {
       return images.get('wall')!
    }
    render(): void {
        super.draw()
    }
}
