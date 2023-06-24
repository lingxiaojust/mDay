// async getClue(){
//     if(this.query.isRelateClue){
//         const res = await this.$ajax.sales.fetchClueList({
//             queryType:6,
//             pageNo: 1,
//             pagesize: 150,
//             groupID: this.query.customerID,
//         })

//         if (res?.success) {
//             const [ clueInfo={}] = res?.data?.data ?? []
//             const { address, contactNobile, storeName:shopName}= clueInfo
//             const formInfo = {
//                 shopName,
//                 address,
//                 contactNobile,
//             }
//             this.formInfo={
//                 ...this.formInfo,
//                 ...formInfo,
//             }
//         }  
//     }
// },
// fetchClueList:(data)=>ajax({
//     url:'/v4/clue',
//     data,
// })