import {
    Accessories, AvatarEnums, AvatarStyle, Clothes, ClothesColor, Eyebrow,
    Eyes, Face, FacialHair, FacialHairColor, Graphic, HairColor, HatColor,
    Mouth, Skin, Top
} from "./avatar.enum";

export class AvatarOptions {
    style: AvatarStyle;
    top: Top;
    accessories: Accessories;
    hairColor: HairColor;
    facialHair: FacialHair;
    clothes: Clothes;
    clothColor: ClothesColor;
    eyes: Eyes;
    eyebrow: Eyebrow;
    mouth: Mouth;
    skin: Skin;
    hatColor: HatColor;
    facialHairColor: FacialHairColor;
    graphic: Graphic;
    face: Face;

    constructor() {
        this.getRandom();
    }

    getRandom() {
        this.style = this.genrateRandom(AvatarStyle);
        this.top = this.genrateRandom(Top);
        this.face = this.genrateRandom(Face);
        this.accessories = this.genrateRandom(Accessories);
        this.hairColor = this.genrateRandom(HairColor);
        this.facialHair = this.genrateRandom(FacialHair);
        this.clothes = this.genrateRandom(Clothes);
        this.clothColor = this.genrateRandom(ClothesColor);
        this.eyes = this.genrateRandom(Eyes);
        this.eyebrow = this.genrateRandom(Eyebrow);
        this.mouth = this.genrateRandom(Mouth);
        this.skin = this.genrateRandom(Skin);
        this.hatColor = this.genrateRandom(HatColor);
        this.facialHairColor = this.genrateRandom(FacialHairColor);
        this.graphic = this.genrateRandom(Graphic);

    }

    getAvatarEnumList(campo: string, enumRef: any): AvatarEnums[] {
        return Object.keys(enumRef).map(key => {
            let label = enumRef[key].trim();
            return new AvatarEnums(label, `${campo}_${label}`);
        });
    }

    private genrateRandom(enu: any) {
        const e = this.getEnumTuple(enu);
        const len = (Object.keys(e).length) - 1;
        const item = (Math.floor(Math.random() * len) + 0);
        return e[item];
    }

    private getEnumTuple(enumRef: any): Array<any> {
        return Object.keys(enumRef).map(key => {
            return enumRef[key];
        });

    }
}