export default function Formvalidation(data) {
    let error ={};
    if(!data.Title){
        error.title ='Title is required'
    }else{error.title = ''}
    if(!data.Desc){
        error.desc = 'Description is required'
    }
    if(!data.Date){
        error.date ='Date is required'
    }
    if(!data.AttendeesNumber){
        error.AttendeesNumber = 'AttendeesNumber is required'
    }
    if(!data.Link ){
        error.link ='Link is required'
    }
    if(!data.Porvince){
        error.porvince ='Porvince is required'
    }
    if(!data.City){
        error.city ='city is required'
    }
    if(!data.Address){
        error.address ='Address is required'
    }
    if(!data.TitleTires ){
        error.titletires = 'TitleTires is required'
    }
    if(!data.TotalTickets){
        error.totaltickets = 'TitleTires is required'
    }
    if( !data.SplitDate ){
        error.splitdate = 'Date is required'
    }
    if( !data.fPrice){
        error.fprice = 'fPrice is required'
    }
    if( !data.sPrice ){
        error.sprice = 'sPrice is required'
    }
    if(!data.Price){
        error.price = 'Price is required'
    }
    return error ;

  
}
