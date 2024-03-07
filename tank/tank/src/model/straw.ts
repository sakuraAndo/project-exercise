import { images } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class straw extends modelAbstract {
    image(): HTMLImageElement {
        return images.get('straw')!;
    }
    render(): void {
        super.draw()
    }
    
}
