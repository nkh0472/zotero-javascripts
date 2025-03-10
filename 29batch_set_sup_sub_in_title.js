// 代码来源于@Four Happy，表示感谢
// 代码来源于https://zhuanlan.zhihu.com/p/24000322183
zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
function transformTitle(title) {
       const regex = /(\d+)([+-]?)/g;
    let transformedTitle = title.replace(regex, (match, num, symbol) => {
        if (symbol === '+' || symbol === '-') {
                      return `<sup>${num}${symbol}</sup>`;
        } else {
                       return `<sub>${num}</sub>`;
        }
    });
    return transformedTitle;
}

for (item of items) {
var lan = item.getField("title")
lan=transformTitle(lan)
item.setField("title", lan)}
 return '化学式上下标设置已完成，请检查可能存在一些特殊情况！';
