import get from '@/util.js';
import config from '@/config.js';

let isLoad = true;

export default {
    getArticleLists(context) {
        if(!isLoad){
            return;
        }
        isLoad = false;

        context.commit('addArticleNumber');
        let number = context.state.articleNumber;
        const url = config.topics;
        get(url, {
            page: 1,
            limit: number,
            mdrender: 'false',
        }).then((res) => {
            context.commit('addArticleLists', res.data)
        }).catch((res) => {
            console.log('MaiSec.vue: ', res);
        }).finally(()=>{
            isLoad = true;
        });
    },
    getArticle(context, {id}) {
        const url = config.topic +'/'+ id
        get(url).then((res) => {
            if(res.success === true) {
                context.commit('addArticle', res.data)
                context.commit('addArticleAuthor', res.data.author.loginname)
            } else {
                console.log('Sorry, Something wrong happened when getting the remote data')
            }
        }).catch((res) => {
            console.log('ArticleCom.vue: ', res);
        });
    },
    getUserInfo(context, url) {
        get(url).then((res) => {
            context.commit('addUserInfo', res.data)
        }).catch((res) => {
            console.log('SideSec.vue :', res);
        });
    }
}
