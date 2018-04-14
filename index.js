const gitgraph = new GitGraph({
    template: {
        colors: ["#D81159", "#008FB5", "#F46036", "#033B29", "#6457A6"],
        branch: {
            lineWidth: 6,
            spacingX: 20,
        },
        commit: {
            spacingY: -80,
            dot: {
                size: 8
            },
            widthExtension: 400,
            message: {
                displayAuthor: false,
                displayBranch: true,
                displayHash: false,
                font: "normal 11pt Arial"
            }
        }
    }
});


/*
日時 YYYY/MM/DD
フォーマットは "<カード名>登場(日時)"
上位報酬登場時は "<イベント名> <佐久間まゆ名> 上位報酬(日時)"

シンデレラガールズ劇場とカード登場が同じ日付場合はシンデレラガールズ劇場が後

後でこの辺のルールもプログラムチックに決めるべきな気がする
*/
const BRANCHES_NAME = {
    "MOBAMAS": "mobamas",
    "DERESUTE": "starlightstage",
    "SHINGEKI": "shingeki",
    "REAL": "real",
    "ANIME": "anime"
}

const data = [{
    "message": "佐久間まゆ初登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2012/06/26"
}, {
    "message": "第1回シンデレラガール選抜総選挙 圏外",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2012/07/30"
}, {
    "message": "[ﾊﾛｳｨﾝﾊﾟｰﾃｨｰ]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2012/09/30"
}, {
    "message": "シンデレラガールズ劇場第38話登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2012/09/30"
}, {
    "message": "[ﾊﾞﾚﾝﾀｲﾝﾊﾟｰﾃｨ-]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2013/01/31"
}, {
    "message": "シンデレラガールズ劇場第76話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2013/02/04"
}, {
    "message": "第9回プロダクションマッチフェスティバル [恋愛ｼﾝﾄﾞﾛｰﾑ]佐久間まゆ 上位報酬",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2013/04/10"
}, {
    "message": "第2回シンデレラガール選抜総選挙 6位",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2013/05/13"
}, {
    "message": "ドリームLIVEフェスティバル ハロウィンパーティー(佐久間まゆ・松永涼・難波笑美)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2013/06/13"
}, {
    "message": "LIVEツアーカーニバル in ドイツ ハロウィンパーティー(佐久間まゆ・梅木音葉・上田鈴帆)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2013/08/29"
}, {
    "message": "LIVEツアーカーニバル in スペースワールド 月夜の歌姫(佐久間まゆ・渋谷凛・堀裕子)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2013/10/30"
}, {
    "message": "[深紅の絆]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2013/10/31"
}, {
    "message": "シンデレラガールズ劇場第183話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2013/11/12"
}, {
    "message": "エヴリデイドリーム発売",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2013/11/13"
}, {
    "message": "[CDﾃﾞﾋﾞｭｰ]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2013/11/13"
}, {
    "message": "お願い！シンデレラPV登場",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2013/11/28"
}, {
    "message": "第3回シンデレラガール選抜総選挙 16位",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2014/04/22"
}, {
    "message": "[永遠のキズナ]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2014/05/31"
}, {
    "message": "シンデレラガールズ劇場第314話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2014/05/31"
}, {
    "message": "シンデレラガールズ劇場第315話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2014/06/01"
}, {
    "message": "第5回アイドルLIVEロワイヤル ハッピーウェディング(佐久間まゆ・三船美優・姫川友紀)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2014/06/17"
}, {
    "message": "第7回ドリームLIVEフェスティバル キュート・ブライド(佐久間まゆ・関裕美・櫻井桃華)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2014/06/30"
}, {
    "message": "シンデレラガールズ劇場第343話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2014/07/15"
}, {
    "message": "[ﾐﾆｵﾝﾙｰｼﾞｭ]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2014/09/17"
}, {
    "message": "シンデレラガールズ劇場第381話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2014/09/18"
}, {
    "message": "第9回ドリームLIVEフェスティバル アンダーザデスク(森久保乃々・佐久間まゆ・星輝子)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2014/10/31"
}, {
    "message": "第8回アイドルLIVEロワイヤル開催 紗枝&まゆ from PM(小早川紗枝・佐久間まゆ)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2014/11/18"
}, {
    "message": "2ndLive PARTY M@GIC!!に出演",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2014/11/30"
}, {
    "message": "Cute jewelries! 002発売",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2014/12/31"
}, {
    "message": "シンデレラガールズ第1話登場",
    "branchName": BRANCHES_NAME.ANIME,
    "date": "2015/1/10"
}, {
    "message": "シンデレラガールズ第3話登場",
    "branchName": BRANCHES_NAME.ANIME,
    "date": "2015/1/14"
}, {
    "message": "LIVEツアーカーニバル 戦国公演 風来剣客伝 湯けむり乙女(堀裕子・佐久間まゆ) 登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2015/2/23"
}, {
    "message": "[夜の一面]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2015/2/28"
}, {
    "message": "シンデレラガールズ劇場第470話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2015/02/28"
}, {
    "message": "シンデレラガールズ劇場第472話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2015/03/02"
}, {
    "message": "マジックアワー第12回登場",
    "branchName": BRANCHES_NAME.ANIME,
    "date": "2015/04/04"
}, {
    "message": "シンデレラガールズ第13話登場",
    "branchName": BRANCHES_NAME.ANIME,
    "date": "2015/04/11"
}, {
    "message": "第4回シンデレラガール選抜総選挙 29位 Cu9位",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2015/04/21"
}, {
    "message": "[夏の秘めごと]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2015/07/01"
}, {
    "message": "シンデレラガールズ劇場第534話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2015/07/01"
}, {
    "message": "シンデレラガールズ劇場第535話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2015/07/01"
}, {
    "message": "シンデレラガールズ第14話登場",
    "branchName": BRANCHES_NAME.ANIME,
    "date": "2015/07/28"
}, {
    "message": "LIVEツアーカーニバル 怪盗公演 美しき追跡者 ホルスの涙に魅入られた娘達(ナターリア・佐久間まゆ・白菊ほたる)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2015/08/21"
}, {
    "message": "第15回ドリームLIVEフェスティバル 宮城親善大使(綾瀬穂乃香・佐久間まゆ・早坂美玲)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2015/08/21"
}, {
    "message": "スターライトステージ初期メンバー",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2015/09/03"
}, {
    "message": "アニメシンデレラガールズBD5巻(あいくるしい)発売",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2015/09/25"
}, {
    "message": "シンデレラガールズ第25話登場",
    "branchName": BRANCHES_NAME.ANIME,
    "date": "2015/10/17"
}, {
    "message": "LIVEツアーカーニバル 魔界公演 幽鬱女王とハロウィンの祝祭 サウンドウィッチーズ(佐久間まゆ・梅木音葉・松永涼)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2015/10/21"
}, {
    "message": "シンデレラガールズ劇場第625話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2015/12/18"
}, {
    "message": "シンデレラガールズ劇場第627話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2015/12/22"
}, {
    "message": "ドリームLIVEフェスティバル新春SP [紡ぐ想い]佐久間まゆ 上位報酬",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2015/12/31"
}, {
    "message": "シンデレラガールズ劇場第635話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2016/01/05"
}, {
    "message": "イベント パステルピンクな恋登場",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2016/01/20"
}, {
    "message": "[フィールマイハート]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2016/01/22"
}, {
    "message": "ドリームLIVEフェスティバル 節分SP ガールズネットワーク(桐生つかさ・佐久間まゆ)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2016/01/31"
}, {
    "message": "シンデレラガールズ劇場第652話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2016/02/06"
}, {
    "message": "第5回シンデレラガール選抜総選挙 27位 Cu8位",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2016/05/13"
}, {
    "message": "シンデレラガールズ劇場第712話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2016/05/26"
}, {
    "message": "シンデレラガールズ劇場第723話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2016/06/15"
}, {
    "message": "イベント Love∞Destiny登場",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2016/06/30"
}, {
    "message": "[Love∞Destiny]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2016/07/08"
}, {
    "message": "4thLIVE TriCastle Story 神戸1日目に出演",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2016/09/03"
}, {
    "message": "4thLIVE TriCastle Story 神戸2日目に出演",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2016/09/04"
}, {
    "message": "[トリートオアトリート]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2016/09/30"
}, {
    "message": "LIVEツアーカーニバル 魔界公演 妖艶魔女と消えたハロウィン ロストウィッチーズ(森久保乃々・佐久間まゆ)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2016/10/09"
}, {
    "message": "4thLIVE TriCastle Story SSA1日目に出演",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2016/10/15"
}, {
    "message": "Love∞Destiny発売",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2016/10/26"
}, {
    "message": "イベント あいくるしい登場",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2016/10/31"
}, {
    "message": "アイドルプロデュース the 5th Anniversary 佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2016/11/28"
}, {
    "message": "[5thアニバーサリー]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2016/11/28"
}, {
    "message": "シンデレラガールズ劇場第815話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2016/12/07"
}, {
    "message": "第26回ドリームLIVEフェスティバル 新春天女(アナスタシア・小早川紗枝・佐久間まゆ)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2016/12/31"
}, {
    "message": "アニメシンデレラガールズ劇場 第2話 登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2017/04/11"
}, {
    "message": "キラッ！満開スマイル発売",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2017/4/26"
}, {
    "message": "第6回シンデレラガール選抜総選挙 6位 Cu1位",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2017/05/14"
}, {
    "message": "5thLIVE TOUR Serendipity Parade 石川1日目に出演",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2017/05/27"
}, {
    "message": "5thLIVE TOUR Serendipity Parade 石川2日目に出演",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2017/05/28"
}, {
    "message": "アニメシンデレラガールズ劇場 第11話 登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2017/06/13"
}, {
    "message": "[ﾊｰﾄﾘｰﾃｨﾎﾞｰﾄ]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2017/06/14"
}, {
    "message": "ドリームLIVEフェスティバル 七夕SP 落花流水(白坂小梅・北条加蓮・佐久間まゆ)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2017/06/14"
}, {
    "message": "シンデレラガールズ劇場第918話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2017/06/17"
}, {
    "message": "5thLIVE TOUR Serendipity Parade 静岡1日目に出演",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2017/06/24"
}, {
    "message": "5thLIVE TOUR Serendipity Parade 静岡2日目に出演",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2017/06/25"
}, {
    "message": "命燃やして恋せよ乙女(マイ・スイート・ハネムーン)発売",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2017/08/09"
}, {
    "message": "5thLIVE TOUR Serendipity Parade SSA1日目に出演",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2017/08/12"
}, {
    "message": "第25回アイドルLIVEロワイヤル もりくぼぱーりー(佐久間まゆ・森久保乃々・早坂美玲・星輝子)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2017/08/21"
}, {
    "message": "イベント イリュージョニスタ！登場",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2017/08/31"
}, {
    "message": "[イリュージョニスタ！]佐久間まゆ登場",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2016/08/31"
}, {
    "message": "シンデレラガールズ劇場第971話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2017/09/28"
}, {
    "message": "アニメシンデレラガールズ劇場 第15話 登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2017/10/10"
}, {
    "message": "アニメシンデレラガールズ劇場 第17話 登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2017/10/24"
}, {
    "message": "[ｵﾝﾘｰﾕｱｷｭｰﾋﾟｯﾄﾞ]佐久間まゆ 登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2017/11/21"
}, {
    "message": "シンデレラガールズ劇場第999話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2017/11/21"
}, {
    "message": "恋が咲く季節発売",
    "branchName": BRANCHES_NAME.REAL,
    "date": "2017/12/13"
}, {
    "message": "第28回アイドルLIVEロワイヤル ドリームアウェイ(佐久間まゆ・喜多日菜子)登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2018/03/17"
}, {
    "message": "イベント キラッ！満開スマイル登場",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2018/03/20"
}, {
    "message": "シンデレラガールズ劇場第1068話登場",
    "branchName": BRANCHES_NAME.SHINGEKI,
    "date": "2018/03/29"
}, {
    "message": "イベント 鋼鉄公演きらりんロボ外伝 ― モロボシティS.O.S！ ― 登場",
    "branchName": BRANCHES_NAME.DERESUTE,
    "date": "2018/04/01"
}, {
    "message": "LIVEツアーカーニバル 刑事公演 アンビバレント・バディ 〜二人はWin-Win〜 ナミティエ専属モデル(小室千奈美・高垣楓・佐久間まゆ・岸部彩華) 登場",
    "branchName": BRANCHES_NAME.MOBAMAS,
    "date": "2018/04/14"
}]

const branch = {
    "mobamas": gitgraph.branch(BRANCHES_NAME.MOBAMAS)
}

$(document).ready(function () {
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            gitgraph.commit({
                message: getCommitMessage(data[i])
            })
            continue
        }
        if (data[i].branchName === data[i - 1].branchName) { //ブランチを変更する必要がないなら
            gitgraph.commit({
                message: getCommitMessage(data[i])
            })
            continue
        }
        if (typeof branch[data[i].branchName] === "undefined") { //新しいブランチが必要になったら
            branch.mobamas.checkout() //モバマス(masterブランチ)からブランチを切るため
            const newBranch = gitgraph.branch(data[i].branchName)
            newBranch.checkout()
            branch[data[i].branchName] = newBranch
            gitgraph.commit({
                message: getCommitMessage(data[i])
            })
        } else {
            branch[data[i].branchName].checkout()
            gitgraph.commit({
                message: getCommitMessage(data[i])
            })
        }
    }
    $(".fa-3x").remove();
});


function getCommitMessage(datum) {
    return `${datum.message}(${datum.date})`
}