const gitgraph = new GitGraph({
    template: {
        colors: ["#979797", "#008FB5", "#FFA657", "#79C99E"],
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
const BRANCHES_NAME = {
    "MOBAMAS": "mobamas",
    "SHINGEKI": "shingeki",
    "REAL": "real",
    "ANIME": "anime"
}

const data = [
    {
        "message": "佐久間まゆ初登場",
        "branchName": BRANCHES_NAME.MOBAMAS,
        "date": "2012/06/26"
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
        "date": "2014/09/17"
    }, {
        "message": "第9回ドリームLIVEフェスティバル アンダーザデスク 登場",
        "branchName": BRANCHES_NAME.MOBAMAS,
        "date": "2014/10/31"
    }, {
        "message": "2ndLive PARTY M@GIC!!に出演",
        "branchName": BRANCHES_NAME.REAL,
        "date": "2014/11/30"
    }, {
        "message": "シンデレラガールズ第1話登場",
        "branchName": BRANCHES_NAME.ANIME,
        "date": "2015/1/10"
    }, {
        "message": "シンデレラガールズ第3話登場",
        "branchName": BRANCHES_NAME.ANIME,
        "date": "2015/1/14"
    }, {
        "message": "[夜の一面]佐久間まゆ登場",
        "branchName": BRANCHES_NAME.MOBAMAS,
        "date": "2015/2/28"
    }
]

const branch = {
    "mobamas": gitgraph.branch(BRANCHES_NAME.MOBAMAS)
}

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
    if (typeof branch[data[i].branchName] === "undefined") {//新しいブランチが必要になったら
        branch.mobamas.checkout()//モバマス(masterブランチ)からブランチを切るため
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

function getCommitMessage(datum) {
    return `${datum.message}(${datum.date})`
}




// const mobamas = gitgraph.branch("mobamas");
// gitgraph.commit({
//     message: "佐久間まゆ初登場(2012/06/26)",
// }).commit({
//     message: "[ﾊﾛｳｨﾝﾊﾟｰﾃｨｰ]佐久間まゆ登場(2012/09/30)",
// });

// const shingeki = gitgraph.branch("shingeki");
// shingeki.checkout();
// gitgraph.commit({
//     message: "シンデレラガールズ劇場第38話登場 (2012/09/30)",
// });
// mobamas.checkout();

// gitgraph.commit({
//     message: "[ﾊﾞﾚﾝﾀｲﾝﾊﾟｰﾃｨ-]佐久間まゆ登場(2013/01/31)",
// });
// shingeki.checkout();
// gitgraph.commit({
//     message: "シンデレラガールズ劇場第76話登場(2013/02/04)",
// });
// mobamas.checkout();
// gitgraph.commit({
//     message: "第9回プロダクションマッチフェスティバル [恋愛ｼﾝﾄﾞﾛｰﾑ]佐久間まゆ 上位報酬(2013/04/10)",
// });

// shingeki.checkout();
// gitgraph.commit({
//     message: "シンデレラガールズ劇場第97話登場(2013/04/10)",
// });

// mobamas.checkout();
// gitgraph.commit({
//     message: "[深紅の絆]佐久間まゆ登場(2013/10/31)",
// });

// shingeki.checkout();
// gitgraph.commit({
//     message: "シンデレラガールズ劇場第177話登場(2013/11/01)",
// }).commit({
//     message: "シンデレラガールズ劇場第183話登場(2013/11/12)",
// });

// mobamas.checkout();
// const real = gitgraph.branch("real");
// gitgraph.commit({
//     message: "エヴリデイドリーム発売(2013/11/13)",
// });

// mobamas.checkout();

// gitgraph.commit({
//     message: "[CDﾃﾞﾋﾞｭｰ]佐久間まゆ登場(2013/11/13)",
// });

// real.checkout();

// gitgraph.commit({
//     message: "シンデレラ2ndLive PARTY M@GIC!!に出演(2014/11/30)",
// });

// mobamas.checkout();

// gitgraph.commit({
//     message: "[永遠のキズナ]佐久間まゆ登場(2014/05/31)",
// });
// shingeki.checkout();
// gitgraph.commit({
//     message: "シンデレラガールズ劇場第314話登場(2014/05/31)",
// });
// gitgraph.commit({
//     message: "シンデレラガールズ劇場第315話登場(2014/06/01)",
// });
// gitgraph.commit({
//     message: "シンデレラガールズ劇場第343話登場(2014/07/15)",
// });
// mobamas.checkout();
// gitgraph.commit({
//     message: "[ﾐﾆｵﾝﾙｰｼﾞｭ]佐久間まゆ登場(2014/09/17)",
// });
// shingeki.checkout();
// gitgraph.commit({
//     message: "シンデレラガールズ劇場第381話登場(2014/09/17)",
// });
// mobamas.checkout();
// gitgraph.commit({
//     message: "第9回ドリームLIVEフェスティバル アンダーザデスク 登場(2014/10/31)"
// });

// const anime = gitgraph.branch("anime");
// gitgraph.commit({
//     message: "シンデレラガールズ第1話登場(2015/1/10)"
// }).commit({
//     message: "シンデレラガールズ第3話登場(2015/1/14)"
// });
// mobamas.checkout();
// gitgraph.commit({
//     message: "[夜の一面]佐久間まゆ登場(2015/2/28)"
// })
