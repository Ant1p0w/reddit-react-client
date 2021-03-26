import React, {Component} from 'react';

//1. Работа с простыми типами
function concatFunction(str1: string, str2: string): string {
    return str1 + str2;
}


//2. Работа с интерфейсами
interface IHomeTask {
    howIDoIt: string,
    someArray: Array<number | string>,
    withData: Array<object>,
}

const MyHomeTask: IHomeTask = {
    howIDoIt: "I Do It Wel",
    someArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Wel", someArray: ["string one", 23]}],
}
console.log(MyHomeTask);

//3. Типизация функций, используя Generic
interface IArray<T> {
    [n: number]: T

    reduce<U>(fn: (accumulator: U, value: T) => U): U
}


//4. Работа с MappedTypes
interface IHomeTask2 {
    data: string;
    numericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPatial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask2> = {
    externalData: {
        value: 'win'
    }
}


//5*. Работа с Generic, Mapped Types, Type inference №1
interface IProps {
    firstProp: string
}

class HomeComponent extends Component<IProps> {
    render() {
        return <div>{this.props.firstProp} < /div>
    }
}

type TMyType<T> = T extends Component<infer E> ? E : T;

let value: TMyType<HomeComponent> = {firstProp: '1'};


//6*. Работа с Generic, Mapped Types, Type inference №2
type TGetJSXPropsProp<T> = {
    [N in keyof T]: T[N] extends object ? T[N] : T[N];
}

const props: TGetJSXPropsProp<JSX.IntrinsicElements['div']> = {
    some: '1233',
    className: 'handler',
}
