<div align=center>

# [Exercism: JavaScript Track](https://exercism.io/tracks/javascript/exercises)

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/ayohana/exercism-js/master?color=%23DE98B2&style=for-the-badge) ![GitHub language count](https://img.shields.io/github/languages/count/ayohana/exercism-js?color=%23DE98B2&style=for-the-badge) ![GitHub top language](https://img.shields.io/github/languages/top/ayohana/exercism-js?color=%23DE98B2&style=for-the-badge)

</div>

## Learning Resources

### Shallow vs Deep Copy


| Shallow Copy         | Deep Copy         |
| :------------------- | :---------------- |
| Original and shallow copy both point to the **same memory location** | Original and deep copy point to **different memory locations** |
| Use `...` spread operator: <br> `let shallowCopy = {...original}` | Use `JSON`: <br> `let deepCopy = JSON.parse(JSON.stringify(original))` |
| Use `Object.assign()`: <br> `let shallowCopy = Object.assign({}, original)` | |

* [StackOverflow: Shallow vs Deep copying objects](https://stackoverflow.com/questions/184710/what-is-the-difference-between-a-deep-copy-and-a-shallow-copy)