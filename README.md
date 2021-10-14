# Avatar

A Simple avatar generator based on <a href="https://github.com/shivam1410/fangpenlin-avataaars-generator-angular" target="_blank">shivam1410/fangpenlin-avataaars-generator-angular</a> but with portability to Angular

## FAGA
FAGA stands for Fangpenlin Avataaars Generator Angular

![alt text](https://raw.githubusercontent.com/shivam1410/fangpenlin-avataaars-generator-angular/master/src/assets/meta.png)

Angular implementation of @fangpenlin's avataaars-generator

## Usage
1) Install the library via standard npm command:

`npm install --save avatar-angular`

2) Import the `AvatarModule` into your Angular module:

```typescript
import { AvatarModule } from 'avatar-angular';

@NgModule({
  imports: [
    AvatarModule,
    ...
  ],
  ...
})
export class AppModule { }
```

3) Use the `AvatarComponent` on your pages:

`<avatar [options]="options"></avatar>`

```typescript
import { AvatarOptions } from 'avatar-angular';

export class AppComponent implements OnInit {

  options: AvatarOptions;

  constructor() {}

  ngOnInit(): void {
    this.options = new AvatarOptions();
    this.options.getRandom();
  }
}
```

As simple as that. 

## Options and Events
This section describes the basic inputs/outputs of the component. All inputs are optional.
### Inputs
* `options: AvatarOptions`

## AvatarOptions
### AvatarOptions
AvatarOptions contains:
* `style: AvatarStyle`
* `top: Top`
* `accessories: Accessories`
* `hairColor: HairColor`
* `facialHair: FacialHair`
* `clothes: Clothes`
* `clothColor: ClothesColor`
* `eyes: Eyes`
* `eyebrow: Eyebrow`
* `mouth: Mouth`
* `skin: Skin`
* `hatColor: HatColor`
* `facialHairColor: FacialHairColor`
* `graphic: Graphic`
* `face: Face`

### How to get the options 
```typescript
import { Accessories } from 'avatar-angular';

export class AppComponent implements OnInit {

  accessories: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.accessories = this.getEnumTupple(Accessories);
  }

  getEnumTupple(enumRef: any): Array<any> {
    return Object.keys(enumRef).map(key => {
      return enumRef[key];

    });
  }
}
```