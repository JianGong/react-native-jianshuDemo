/**
 * 简书APP关注
 */
import React,{
    Component,
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    ListView,
    AlertIOS,
    Dimensions
    } from 'react-native';

var data = (function(){
  // fetch('/mock/cityData.json')
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //     console.log(responseData);
  //   })
  // var _arr = [];
  // for(var i = 0;i <= 100; i++){
  //   _arr.push({
  //     "userId" : i,
  //     "user" : "hugo hua",
  //     "blog" : "http://www.ghugo.com",
  //     "github" : "https://github.com/hugohua"
  //   })
  // }
  return {
  	"ret": true,
  	"errmsg": "",
  	"data": {
  		"abroad": {
  			"A": [{
  				"name": "爱丁堡",
  				"code": "edinburgh_cit"
  			}, {
  				"name": "阿布扎比",
  				"code": "abu_dhabi_abu"
  			}, {
  				"name": "阿姆斯特丹",
  				"code": "government_of_amsterdam"
  			}, {
  				"name": "澳门",
  				"code": "macao_city"
  			}, {
  				"name": "奥克兰",
  				"code": "auckland_auc"
  			}, {
  				"name": "奥兰多",
  				"code": "orlando_ora"
  			}, {
  				"name": "奥斯汀",
  				"code": "austin_tx"
  			}, {
  				"name": "阿德莱德",
  				"code": "adelaide_sa"
  			}],
  			"B": [{
  				"name": "波尔多",
  				"code": "bordeaux"
  			}, {
  				"name": "博卡拉",
  				"code": "pokhara_gan"
  			}, {
  				"name": "巴黎",
  				"code": "paris_city"
  			}, {
  				"name": "布拉格",
  				"code": "prague_hla"
  			}, {
  				"name": "波士顿",
  				"code": "boston_suf"
  			}, {
  				"name": "波兰",
  				"code": "_poland"
  			}, {
  				"name": "布达佩斯",
  				"code": "budapest"
  			}, {
  				"name": "巴塞罗那",
  				"code": "barcelona_b"
  			}, {
  				"name": "布鲁塞尔",
  				"code": "brussels"
  			}, {
  				"name": "北海道",
  				"code": "hokkaido"
  			}, {
  				"name": "布里斯班",
  				"code": "brisbane_qld"
  			}, {
  				"name": "柏林",
  				"code": "berlin_ber"
  			}, {
  				"name": "伯明翰",
  				"code": "birmingham"
  			}, {
  				"name": "班加罗尔",
  				"code": "bangalore_ban"
  			}, {
  				"name": "芭提雅",
  				"code": "pattaya"
  			}],
  			"C": [{
  				"name": "冲绳",
  				"code": "okinawa_oki"
  			}],
  			"D": [{
  				"name": "迪拜",
  				"code": "dubai"
  			}, {
  				"name": "多伦多",
  				"code": "toronto_tor"
  			}, {
  				"name": "大阪",
  				"code": "osaka"
  			}, {
  				"name": "东京",
  				"code": "tokyo"
  			}, {
  				"name": "大邱",
  				"code": "daegu_kr_sou"
  			}, {
  				"name": "巴厘岛",
  				"code": "denpasar_bali"
  			}, {
  				"name": "达拉斯",
  				"code": "dallas_tx"
  			}],
  			"F": [{
  				"name": "佛罗伦萨",
  				"code": "florence"
  			}, {
  				"name": "法兰克福",
  				"code": "frankfurt_da"
  			}, {
  				"name": "釜山",
  				"code": "busan_kr"
  			}, {
  				"name": "费城",
  				"code": "philadelphia_nes"
  			}],
  			"G": [{
  				"name": "高雄",
  				"code": "kaohsiung"
  			}, {
  				"name": "哥本哈根",
  				"code": "kobenhavn"
  			}, {
  				"name": "关岛",
  				"code": "_guam"
  			}, {
  				"name": "哥德堡",
  				"code": "gothenburg_se"
  			}],
  			"H": [{
  				"name": "华盛顿",
  				"code": "washington_dis"
  			}, {
  				"name": "赫尔辛基",
  				"code": "helsinki_hel"
  			}, {
  				"name": "花莲",
  				"code": "hualian"
  			}, {
  				"name": "皇后镇",
  				"code": "queenstown_que"
  			}, {
  				"name": "河内",
  				"code": "hanoi_vn"
  			}, {
  				"name": "胡志明市",
  				"code": "ho_chi_minh_city"
  			}, {
  				"name": "华欣",
  				"code": "hua_hin_hua"
  			}, {
  				"name": "黄金海岸",
  				"code": "gold_coast_qld"
  			}, {
  				"name": "华沙",
  				"code": "warsaw_war"
  			}],
  			"J": [{
  				"name": "京都",
  				"code": "kyoto_kyo"
  			}, {
  				"name": "济州岛",
  				"code": "jeju"
  			}, {
  				"name": "甲米",
  				"code": "krabi_th"
  			}, {
  				"name": "静冈",
  				"code": "shizuoka_shi"
  			}, {
  				"name": "旧金山",
  				"code": "san_francisco_county"
  			}, {
  				"name": "金边",
  				"code": "phnom_penh"
  			}, {
  				"name": "吉隆坡",
  				"code": "kuala_lumpur"
  			}, {
  				"name": "加德满都",
  				"code": "kathmandu_bag"
  			}, {
  				"name": "嘉义",
  				"code": "chiayi"
  			}, {
  				"name": "基隆",
  				"code": "keelung"
  			}, {
  				"name": "基督城",
  				"code": "christchurch_chr"
  			}, {
  				"name": "京畿道",
  				"code": "gyeonggido"
  			}, {
  				"name": "戛纳",
  				"code": "cannes_alp"
  			}, {
  				"name": "江原道",
  				"code": "gangwon"
  			}],
  			"K": [{
  				"name": "垦丁",
  				"code": "kenting"
  			}, {
  				"name": "科伦坡",
  				"code": "colombo_wp"
  			}, {
  				"name": "堪培拉",
  				"code": "canberra_act"
  			}, {
  				"name": "开普敦",
  				"code": "cape_town"
  			}, {
  				"name": "凯恩斯",
  				"code": "cairns_qld"
  			}],
  			"L": [{
  				"name": "洛杉矶",
  				"code": "los_angeles_ca"
  			}, {
  				"name": "罗马",
  				"code": "rome_rm"
  			}, {
  				"name": "伦敦",
  				"code": "london_england"
  			}, {
  				"name": "兰卡威",
  				"code": "langkawi"
  			}, {
  				"name": "雷克雅未克",
  				"code": "reykjavik_cap"
  			}, {
  				"name": "里昂",
  				"code": "lyon_rho"
  			}, {
  				"name": "里斯本",
  				"code": "lisbon_pt"
  			}, {
  				"name": "路易斯安那州",
  				"code": "louisiana"
  			}],
  			"M": [{
  				"name": "墨尔本",
  				"code": "melbourne_australia"
  			}, {
  				"name": "名古屋",
  				"code": "nagoya_aic"
  			}, {
  				"name": "米兰",
  				"code": "milan_mi"
  			}, {
  				"name": "慕尼黑",
  				"code": "munich_m"
  			}, {
  				"name": "毛里求斯",
  				"code": "_mauritius"
  			}, {
  				"name": "马德里",
  				"code": "madrid_com"
  			}, {
  				"name": "曼谷",
  				"code": "bangkok"
  			}, {
  				"name": "迈阿密",
  				"code": "miami_mia"
  			}, {
  				"name": "蒙特利尔",
  				"code": "montreal_mon"
  			}, {
  				"name": "美瑛町",
  				"code": "biei"
  			}, {
  				"name": "孟买",
  				"code": "mumbai_suburban"
  			}, {
  				"name": "莫斯科",
  				"code": "moscow_g"
  			}],
  			"N": [{
  				"name": "纽约",
  				"code": "new_york_ny"
  			}, {
  				"name": "尼斯",
  				"code": "nice_alp"
  			}, {
  				"name": "奈良",
  				"code": "nara_nar"
  			}],
  			"P": [{
  				"name": "普吉岛",
  				"code": "koh_phuket_tha"
  			}, {
  				"name": "平顺省",
  				"code": "binh_thuan_province"
  			}],
  			"Q": [{
  				"name": "清迈",
  				"code": "chiang_mai"
  			}, {
  				"name": "奇特旺 ",
  				"code": "chitewan"
  			}, {
  				"name": "清莱",
  				"code": "chiang_rai_th"
  			}, {
  				"name": "庆州",
  				"code": "gyeongju_si"
  			}, {
  				"name": "庆尚南道",
  				"code": "gyeongsangna"
  			}],
  			"R": [{
  				"name": "日本",
  				"code": "_japan"
  			}, {
  				"name": "日内瓦",
  				"code": "geneva_gen"
  			}, {
  				"name": "仁川",
  				"code": "incheon_kr"
  			}],
  			"S": [{
  				"name": "斯德哥尔摩",
  				"code": "stockholm_sto"
  			}, {
  				"name": "圣地亚哥",
  				"code": "san_diego_san"
  			}, {
  				"name": "素可泰",
  				"code": "sukhothai_th"
  			}, {
  				"name": "神户",
  				"code": "kobe_hyo"
  			}, {
  				"name": "苏格兰",
  				"code": "scotland"
  			}, {
  				"name": "首尔",
  				"code": "seoul"
  			}, {
  				"name": "苏黎世",
  				"code": "zurich_zur"
  			}, {
  				"name": "素叻他尼",
  				"code": "surat_thani_th"
  			}, {
  				"name": "山梨市",
  				"code": "yamanashi_yam"
  			}, {
  				"name": "顺化",
  				"code": "hue_vn_vie"
  			}, {
  				"name": "圣安东尼奥",
  				"code": "san_antonio_bex"
  			}, {
  				"name": "塞班岛",
  				"code": "saipan_mnp"
  			}, {
  				"name": "苏梅岛",
  				"code": "koh_samui"
  			}, {
  				"name": "圣彼得堡",
  				"code": "st_petersburg_g"
  			}],
  			"T": [{
  				"name": "台南",
  				"code": "tainan"
  			}, {
  				"name": "台湾",
  				"code": "_taiwan"
  			}, {
  				"name": "台中",
  				"code": "taizhong"
  			}, {
  				"name": "台北",
  				"code": "taipei"
  			}, {
  				"name": "台东",
  				"code": "taidong"
  			}, {
  				"name": "桃园",
  				"code": "taoyuan"
  			}, {
  				"name": "田纳西州",
  				"code": "tennessee"
  			}],
  			"W": [{
  				"name": "维也纳",
  				"code": "vienna_vie"
  			}, {
  				"name": "威尼斯",
  				"code": "venice_ve"
  			}, {
  				"name": "温哥华",
  				"code": "vancouver_gre"
  			}, {
  				"name": "渥太华",
  				"code": "ottawa_ott"
  			}, {
  				"name": "维多利亚",
  				"code": "victoria_cap"
  			}],
  			"X": [{
  				"name": "新加坡",
  				"code": "singapore_city"
  			}, {
  				"name": "西雅图",
  				"code": "seattle_kin"
  			}, {
  				"name": "箱根町",
  				"code": "hakone_ash"
  			}, {
  				"name": "希腊",
  				"code": "_greece"
  			}, {
  				"name": "悉尼",
  				"code": "sydney_nsw"
  			}, {
  				"name": "岘港",
  				"code": "da_nang_vn"
  			}, {
  				"name": "夏威夷",
  				"code": "hawaii_county"
  			}, {
  				"name": "新竹",
  				"code": "xinzhu"
  			}, {
  				"name": "新北市",
  				"code": "taipei_xian"
  			}, {
  				"name": "暹粒市",
  				"code": "siem_reap_cambodia"
  			}, {
  				"name": "休斯顿",
  				"code": "houston_har"
  			}, {
  				"name": "新德里",
  				"code": "New Delhi"
  			}, {
  				"name": "峡湾",
  				"code": "fiordland"
  			}, {
  				"name": "新山",
  				"code": "johor_bahru_joh"
  			}],
  			"Y": [{
  				"name": "雅典",
  				"code": "athens_ath"
  			}, {
  				"name": "伊斯坦布尔",
  				"code": "istanbul_ist"
  			}, {
  				"name": "英国",
  				"code": "_united_kingdom"
  			}, {
  				"name": "宜兰县",
  				"code": "yilan_taiwan"
  			}, {
  				"name": "约翰内斯堡",
  				"code": "johannesburg_eas"
  			}, {
  				"name": "雅加达",
  				"code": "jakarta"
  			}, {
  				"name": "亚特兰大",
  				"code": "atlanta_ful"
  			}, {
  				"name": "盐湖城",
  				"code": "salt_lake_city_sal"
  			}, {
  				"name": "芽庄",
  				"code": "nha_trang_kha"
  			}, {
  				"name": "云顶高原",
  				"code": "genting_highlands_pah"
  			}],
  			"Z": [{
  				"name": "芝加哥",
  				"code": "chicago_coo"
  			}, {
  				"name": "札幌",
  				"code": "sapporo_hok"
  			}, {
  				"name": "棕榈泉",
  				"code": "palm_springs_riv"
  			}, {
  				"name": "朱诺",
  				"code": "juneau_ak"
  			}]
  		},
  		"domestic": {
  			"B": [{
  				"name": "北京",
  				"code": "beijing_city"
  			}, {
  				"name": "北海",
  				"code": "beihai"
  			}],
  			"C": [{
  				"name": "重庆",
  				"code": "chongqing_city"
  			}, {
  				"name": "长春",
  				"code": "changchun"
  			}, {
  				"name": "长沙",
  				"code": "changsha"
  			}, {
  				"name": "成都",
  				"code": "chengdu"
  			}, {
  				"name": "常州",
  				"code": "changzhou"
  			}, {
  				"name": "长白山",
  				"code": "changbaishan"
  			}],
  			"D": [{
  				"name": "敦煌市",
  				"code": "dunhuang"
  			}, {
  				"name": "大同",
  				"code": "datong"
  			}, {
  				"name": "大连",
  				"code": "dalian"
  			}, {
  				"name": "大理",
  				"code": "dali"
  			}, {
  				"name": "东莞",
  				"code": "dongguan"
  			}, {
  				"name": "稻城",
  				"code": "daocheng"
  			}],
  			"E": [{
  				"name": "峨眉山市",
  				"code": "emeishan"
  			}],
  			"F": [{
  				"name": "福州",
  				"code": "fuzhou_fujian"
  			}, {
  				"name": "佛山",
  				"code": "foshan"
  			}],
  			"G": [{
  				"name": "贵阳",
  				"code": "guiyang"
  			}, {
  				"name": "广州",
  				"code": "guangzhou"
  			}, {
  				"name": "桂林",
  				"code": "guilin"
  			}],
  			"H": [{
  				"name": "黄山",
  				"code": "huangshan"
  			}, {
  				"name": "呼伦贝尔",
  				"code": "hulunbeier"
  			}, {
  				"name": "合肥",
  				"code": "hefei"
  			}, {
  				"name": "哈尔滨",
  				"code": "haerbin"
  			}, {
  				"name": "杭州",
  				"code": "hangzhou"
  			}, {
  				"name": "海口",
  				"code": "haikou"
  			}, {
  				"name": "呼和浩特",
  				"code": "huhehaote"
  			}, {
  				"name": "海螺沟",
  				"code": "hailuogou"
  			}],
  			"J": [{
  				"name": "济南",
  				"code": "jinan"
  			}, {
  				"name": "嘉峪关",
  				"code": "jiayuguan"
  			}, {
  				"name": "九寨沟",
  				"code": "jiuzhaigou"
  			}, {
  				"name": "九江",
  				"code": "jiujiang"
  			}, {
  				"name": "吉林",
  				"code": "jilin_city"
  			}, {
  				"name": "九华山",
  				"code": "jiuhuashan"
  			}],
  			"K": [{
  				"name": "昆明",
  				"code": "kunming"
  			}, {
  				"name": "康定",
  				"code": "kangding"
  			}],
  			"L": [{
  				"name": "洛阳",
  				"code": "luoyang"
  			}, {
  				"name": "兰州",
  				"code": "lanzhou"
  			}, {
  				"name": "拉萨",
  				"code": "lasa"
  			}, {
  				"name": "丽江",
  				"code": "lijiang"
  			}, {
  				"name": "乐山",
  				"code": "leshan"
  			}, {
  				"name": "泸沽湖",
  				"code": "luguhu"
  			}, {
  				"name": "灵川县",
  				"code": "lingchuanxian"
  			}, {
  				"name": "罗平县",
  				"code": "luopingxian"
  			}],
  			"M": [{
  				"name": "漠河",
  				"code": "mohe"
  			}],
  			"N": [{
  				"name": "南京",
  				"code": "nanjing"
  			}, {
  				"name": "南宁",
  				"code": "nanning"
  			}, {
  				"name": "宁波",
  				"code": "ningbo"
  			}, {
  				"name": "南昌",
  				"code": "nanchang"
  			}, {
  				"name": "南通",
  				"code": "nantong"
  			}],
  			"P": [{
  				"name": "平遥",
  				"code": "pingyao"
  			}],
  			"Q": [{
  				"name": "泉州",
  				"code": "quanzhou"
  			}, {
  				"name": "青岛",
  				"code": "qingdao"
  			}, {
  				"name": "秦皇岛",
  				"code": "qinhuangdao"
  			}],
  			"R": [{
  				"name": "瑞丽",
  				"code": "ruili"
  			}],
  			"S": [{
  				"name": "苏州",
  				"code": "suzhou_jiangsu"
  			}, {
  				"name": "上海",
  				"code": "shanghai_city"
  			}, {
  				"name": "深圳",
  				"code": "shenzhen"
  			}, {
  				"name": "沈阳",
  				"code": "shenyang"
  			}, {
  				"name": "石家庄",
  				"code": "shijiazhuang"
  			}, {
  				"name": "三亚",
  				"code": "sanya"
  			}, {
  				"name": "色达县",
  				"code": "seda"
  			}, {
  				"name": "尚志市",
  				"code": "shangzhishi"
  			}],
  			"T": [{
  				"name": "太原",
  				"code": "taiyuan"
  			}, {
  				"name": "天津",
  				"code": "tianjin_city"
  			}, {
  				"name": "腾冲县",
  				"code": "tengchong"
  			}, {
  				"name": "泰安",
  				"code": "taian"
  			}],
  			"W": [{
  				"name": "乌鲁木齐",
  				"code": "wulumuqi"
  			}, {
  				"name": "五台山",
  				"code": "wutaishan"
  			}, {
  				"name": "温州",
  				"code": "wenzhou"
  			}, {
  				"name": "武汉",
  				"code": "wuhan"
  			}, {
  				"name": "无锡",
  				"code": "wuxi"
  			}, {
  				"name": "威海",
  				"code": "weihai"
  			}, {
  				"name": "乌鲁木齐",
  				"code": "wulumuqi"
  			}, {
  				"name": "乌镇",
  				"code": "wuzhen"
  			}, {
  				"name": "武当山",
  				"code": "wudangshan"
  			}, {
  				"name": "武隆县",
  				"code": "wulong"
  			}],
  			"X": [{
  				"name": "西宁",
  				"code": "xining"
  			}, {
  				"name": "西双版纳",
  				"code": "xishuangbanna"
  			}, {
  				"name": "西安",
  				"code": "xian"
  			}, {
  				"name": "厦门",
  				"code": "xiamen"
  			}, {
  				"name": "徐州",
  				"code": "xuzhou"
  			}, {
  				"name": "香格里拉",
  				"code": "xianggelila"
  			}],
  			"Y": [{
  				"name": "银川",
  				"code": "yinchuan"
  			}, {
  				"name": "宜昌",
  				"code": "yichang"
  			}, {
  				"name": "烟台",
  				"code": "yantai"
  			}, {
  				"name": "扬州",
  				"code": "yangzhou"
  			}, {
  				"name": "义乌市",
  				"code": "yiwushi"
  			}],
  			"Z": [{
  				"name": "张掖",
  				"code": "zhangye"
  			}, {
  				"name": "郑州",
  				"code": "zhengzhou"
  			}, {
  				"name": "珠海",
  				"code": "zhuhai"
  			}, {
  				"name": "遵义",
  				"code": "zunyi"
  			}, {
  				"name": "张家界",
  				"code": "zhangjiajie"
  			}, {
  				"name": "漳州",
  				"code": "zhangzhou"
  			}, {
  				"name": "张家口",
  				"code": "zhangjiakou"
  			}]
  		}
  	}
  }


})()
var navList = [];
var DetectionPage = React.createClass({
    getInitialState : function(){
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };
        return {
            dataSource: new ListView.DataSource({
                getRowData: getRowData,
                getSectionHeaderData: getSectionData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }
    },
    componentWillMount : function(){
        var res = this.listViewHandleData(data);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(res.dataBlob,res.sectionIDs,res.rowIDs),
            loaded: true
        });
    },

    listViewHandleData : function(result){
        var me = this,
            dataBlob = {},
            //sectionIDs = ['s0','s1'],
            sectionIDs = [],
            //rowIDs = [[],[]],
            rowIDs = [],
            key,
            //result = Util.sortResource(data),        //重新排序
            length = result.data.abroad.length,
            //length = result.length,
            splitIdx,
            i = 0;

        for(var item in result.data.abroad){
            sectionIDs.push(item)
            rowIDs.push([])
            dataBlob[item] = result.data.abroad[item];
            for(var letter in result.data.abroad[item]){
                dataBlob[item + ':' +result.data.abroad[item][letter]['code']] = result.data.abroad[item][letter]['name'];
                rowIDs[i].push(result.data.abroad[item][letter]['code']);
            }
            navList.push(<Text key={item}>{item}</Text>);
            i++;
        }

        return {
            dataBlob : dataBlob,
            sectionIDs : sectionIDs,
            rowIDs : rowIDs
        }
    },
    _renderRow : function(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={() => this.onPressRow(rowData, sectionID)}>
                <View style={styles.rowStyle}>
                    <Text style={styles.rowText}>{rowData} {rowID}</Text>
                </View>
            </TouchableOpacity>
        );
    },
    onPressRow : function (rowData, sectionID) {
        var buttons = [
            {
                text : '取消'
            },
            {
                text    : '确定'
            }
        ]
        AlertIOS.alert('当前城市 ' + rowData, null, null);
    },

    renderSectionHeader(sectionData, sectionID){
        if(sectionData){
            return (
              <View style={[styles.rowHeader]}>
                  <Text style={styles.rowText}>{sectionID}</Text>
              </View>
            )
        }else{
            return <View />
        }
    },

    render : function(){
        return (
            <View style={styles.container}>
              <View style={styles.listView}>
                  <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID, highlightRow) => this._renderRow(rowData, sectionID, rowID, highlightRow)}
                    renderSectionHeader = {this.renderSectionHeader}
                    />
              </View>
              <View style={styles.nav}>
                  {navList}
              </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({

    container : {
        flex : 1,
        marginTop:20,
        position : 'relative'
    },
    listView : {
      height : Dimensions.get('window').height-80
    },
    nav : {
      position : 'absolute',
      width: 37,
      height : Dimensions.get('window').height,
      justifyContent : 'center',
      alignItems : 'center',
      right : 3,
      top : 0
    },
    rowHeader : {
      height : 30,
      marginRight : 40,
      backgroundColor: '#f9f9f9',
      borderColor : '#E0E0E0',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      justifyContent : 'center',
      paddingLeft: 16
    },
    rowStyle: {
        height: 20,
        paddingVertical: 20,
        paddingLeft: 16,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        marginRight : 40,
        justifyContent : 'center',
    }
});

module.exports = DetectionPage;
