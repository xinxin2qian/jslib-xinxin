import {type} from "./type";
export function clone (source) {
    const t = type(source);
    if (t !== "object" && t !== "array") {
        return source;
    }
    let target;
    if (t === "object") {
        target = {};
        for (let i in source) {
            if (source.hasOwnProperty(i)) {
                target[i] = clone(source[i]);
            }
        }
    } else {
        target = [];
        for (let i = 0; i < source.length; i++) {
            target[i] = clone(source[i]);
        }
    }
    return target;
}
// 代码实现测试：
// console.log(type({}))
// console.log(type([]))
// // let a = {name: "xinxinqian"}
// let a = [{name: "xinxinqian"}]
// let b = clone(a);
// b[0].name = "易烊千玺";
// console.log(a, b);