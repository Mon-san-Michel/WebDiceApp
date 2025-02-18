//入力の受け取り
const roll_btn = document.getElementById("roll_btn");
const dice_num = document.getElementById("dice_num");
const dice_size = document.getElementById("dice_size");

//出力先（過去の結果）と現在時刻
const output = document.getElementById("output_list");
const timelog = new Date().toLocaleString();

//実行ボタンが押されたときの処理
roll_btn.addEventListener('click', () => {
    let roll_output = [];
	let roll_total = 0;
	//ダイスロール、dice_size面ダイスをdice_num個転がした時の結果
    for (i = 0; i < dice_num.value; i++) {
		let roll = Math.floor(Math.random() * dice_size.value) + 1;
        roll_output.push(roll);
		roll_total += roll;
    }
	//今回の結果と時刻を出力に追加
	output.innerHTML += `<div id = "output"><span id = "output_dice">${dice_num.value}D${dice_size.value}＞${roll_total}</span><div id ="output_num">{${roll_output}}</div><span id="output_time">${timelog}</span></div><hr>`;
});