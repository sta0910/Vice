let first = prompt("コマンドを入力してください(new, list, delete, quit)")
const todos = [];

        while (first !== "quit") {
            if(first === "list") {
                console.log("XXXXXXXXXXXXXXXXXXX");

                for(let i=0; i<todos.length; i++) {
                    console.log(`${i}: ${todos[i]}`)
                }
                console.log("XXXXXXXXXXXXXXXXXXX");

            } else if (first ==="new") {
                const newToDo = prompt("タスクを入力してください")
                todos.push(newToDo);
                console.log(`${newToDo}を追加しました`)

            } else if (first === "delete") {
                const index = parseInt(prompt("削除するタスクを入力してください"));
                if (!Number.isNaN(index)) {
                const deleted = todos.splice(index, 1);
                console.log(`${deleted}を削除しました`)
                }
            } else {
                console.log("有効なインデックスを入力してください")
            }
            first = prompt("コマンドを入力してください(new, list, delete, quit)")
        }
        console.log("アプリを終了しました")

function isSameNumbers(one, two) {
    if (one == two) {
        console.log(`${isSameNumbers}(${one}, ${two})ゾロ目`)
    } else {
        console.log(`${isSameNumbers}(${one}, ${two})ゾロ目じゃない`)
    }
}

function lastElement(num[x]) {
    if (num[num.length] = null) {
        return null
    }
}

function capitalize(str) {
    const hd = str[0].toUpperCase()
    return (hd + str.slice(1, str.length));
}

function sumArray(x) {
    let total = 0;
    for (let i=0; i<x.length; i++) {
        total += x[i]
    } 
    return total;
}
x function returnDay(x) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  if (x < 1 || x > 7) {
    return null;
  }

  return days[x - 1];
}