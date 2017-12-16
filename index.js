const gitgraph = new GitGraph({
    template: {
        colors: ["#979797", "#008FB5", "#FFA657"],
        branch: {
            lineWidth: 8,
            spacingX: 50,
        },
        commit: {
            spacingY: -80,
            dot: {
                size: 12
            },
            message: {
                displayAuthor: false,
                displayBranch: true,
                displayHash: false,
                font: "normal 12pt Arial"
            }
        }
    }
});
/*
日時 YYYY/MM/DD
フォーマットは "<カード名>登場(日時)"
上位報酬登場時は "<イベント名> <佐久間まゆ名> 上位報酬(日時)"

シンデレラガールズ劇場とカード登場が同じ日付場合はシンデレラガールズ劇場が後
*/

const master = gitgraph.branch("mobamas");
gitgraph.commit({
    message: "佐久間まゆ初登場(2012/06/26)",
}).commit({
    message: "[ﾊﾛｳｨﾝﾊﾟｰﾃｨｰ]佐久間まゆ登場(2012/09/30)",
}).commit({
    message: "シンデレラガールズ劇場第38話登場 (2012/09/30)",
}).commit({
    message: "[ﾊﾞﾚﾝﾀｲﾝﾊﾟｰﾃｨ-]佐久間まゆ登場(2013/01/31)",
}).commit({
    message: "シンデレラガールズ劇場第76話登場(2013/02/04)",
}).commit({
    message: "第9回プロダクションマッチフェスティバル [恋愛ｼﾝﾄﾞﾛｰﾑ]佐久間まゆ 上位報酬(2013/04/10)",
}).commit({
    message: "シンデレラガールズ劇場第97話登場(2013/04/10)",
}).commit({
    message: "[深紅の絆]佐久間まゆ登場(2013/10/31)",
});


// developブランチを作成 ＆ HEADを切り替えて2回コミット
// var develop = gitgraph.branch('develop');
// gitgraph.commit().commit();

// // HEADをmasterブランチに切り替えて1回コミット
// master.checkout();
// gitgraph.commit();

// // developブランチをmasterブランチにマージ
// develop.merge(master);