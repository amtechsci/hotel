var exports = module.exports = {}
const config = require('../../config.js');
exports.index = function(req, res) {
session=req.session;
if(req.query.email !== undefined){
    // alert(req.query.email);
    config.con.query("INSERT INTO `newsletter`(`email`) VALUES ('"+req.query.email+"')",(err) => {
    });
}
    config.con.query("SELECT city FROM hotel GROUP BY city",(err,cities) => {
        config.con.query("SELECT * FROM hotel",(err,hotels) => {
            let user = '';
            if(session.user_id !== undefined){
                config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
                    if(err){res.redirect('/logout');}else{
                        if(result.length > 0){
                            user = result[0];
                        }else{
                            res.redirect('/logout');
                        }
                    }
                    res.render('index',{APP_URL : config.APP_URL,cities:cities,hotels:hotels,url:req.url,user:user,hid:1});
                });
            }else{
            res.render('index',{APP_URL : config.APP_URL,cities:cities,hotels:hotels,url:req.url,user:user,hid:1});
            }
        });
    });
}
exports.hotels = function(req, res) {
session=req.session;
    config.con.query("SELECT * FROM hotel WHERE hotel_type = 'Hotel'",(err,hotels) => {
        let user = '';
        if(session.user_id !== undefined){
            config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
                if(err){res.redirect('/logout');}else{
                    if(result.length > 0){
                        user = result[0];
                    }else{
                        res.redirect('/logout');
                    }
                }
                res.render('hotels',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user});
            });
        }else{
            res.render('hotels',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user});
        }
    });
}
exports.resorts = function(req, res) {
session=req.session;
config.con.query("SELECT * FROM hotel WHERE hotel_type = 'Resort'",(err,hotels) => {
    let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('resorts',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user});
        });
    }else{
        res.render('resorts',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user});
    }
});
}
exports.private_luxary_residency = function(req, res) {
session=req.session;
config.con.query("SELECT * FROM hotel WHERE hotel_type = 'Luxary Residency'",(err,hotels) => {
    let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('private_luxary_residency',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user});
        });
    }else{
        res.render('private_luxary_residency',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user});
    }
});
}
exports.service_apartments = function(req, res) {
session=req.session;
config.con.query("SELECT * FROM hotel WHERE hotel_type = 'Service Apartment'",(err,hotels) => {
    let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('service_apartments',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user});
        });
    }else{
        res.render('service_apartments',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user});
    }
});
}
exports.meet_and_events = function(req, res) {
session=req.session;
console.log(req.body);
if(req.body.booking_date !== undefined){
    config.con.query("INSERT INTO `meeet_and_event`(`booking_date`, `booking_time`, `no_of_guest`, `name`, `email`, `phone`, `comment`) VALUES ('"+req.body.booking_date+"','"+req.body.booking_time+"','"+req.body.no_of_guest+"','"+req.body.name+"','"+req.body.email+"','"+req.body.phone+"','"+req.body.comment+"')",(err,result) => {
        if(err) console.log(err);
        res.redirect('meet-and-events');
    });
}else{
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('meet_and_events',{APP_URL : config.APP_URL,url:req.url,user:user});
        });
    }else{
        let user = '';
        res.render('meet_and_events',{APP_URL : config.APP_URL,url:req.url,user:user});
    }
}
}
exports.loyalty_program = function(req, res) {
session=req.session;
console.log(req.body);
if(req.body.booking_date !== undefined){
    config.con.query("INSERT INTO `meeet_and_event`(`booking_date`, `booking_time`, `no_of_guest`, `name`, `email`, `phone`, `comment`) VALUES ('"+req.body.booking_date+"','"+req.body.booking_time+"','"+req.body.no_of_guest+"','"+req.body.name+"','"+req.body.email+"','"+req.body.phone+"','"+req.body.comment+"')",(err,result) => {
        if(err) console.log(err);
        res.redirect('meet-and-events');
    });
}else{
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('loyalty_program',{APP_URL : config.APP_URL,url:req.url,user:user});
        });
    }else{
        let user = '';
        res.render('loyalty_program',{APP_URL : config.APP_URL,url:req.url,user:user});
    }
}
}
exports.e_gift_coupon = function(req, res) {
session=req.session;
config.con.query("SELECT * FROM hotel",(err,hotels) => {
    let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('e_gift_coupon',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user});
        });
    }else{
        res.render('e_gift_coupon',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user});
    }
});
}
exports.ecouponbuy = function(req, res) {
session=req.session;
if(req.params.id == 1){
    var amount = 3000;
}else if(req.params.id == 2){
    var amount = 4500;
}else if(req.params.id == 3){
    var amount = 10000;
}else if(req.params.id == 4){
    var amount = 20000;
}
var things = ['A', 'E', 'B', 'F', 'C', 'G', 'D', 'H', 'T', 'Z'];
var one = things[Math.floor(Math.random()*things.length)];
var tow = things[Math.floor(Math.random()*things.length)];
var three = things[Math.floor(Math.random()*things.length)];
var four = things[Math.floor(Math.random()*things.length)];
var five = things[Math.floor(Math.random()*things.length)];
var coupon = one+tow+three+four+five+Date.now();
const date = require('date-and-time');
const now = new Date();
var valid_date = new Date(now.setFullYear(now.getFullYear()+1));
valid_date = date.format(valid_date,'YYYY/MM/DD HH:mm:ss');
config.con.query("INSERT INTO `ecoupon`(`coupon_code`, `amount`, `valid_date`) VALUES ('"+coupon+"','"+amount+"','"+valid_date+"')",(err,result) => {
        config.con.query("SELECT * FROM ecoupon WHERE id="+result.insertId,(err,resulta) => {
            if(err){res.redirect('/e-gift-coupon');}else{
                if(resulta.length > 0){
                    coupondata = resulta[0];
                }else{
                    res.redirect('/e-gift-coupon');
                }
            }
            res.render('egift_coupon',{APP_URL : config.APP_URL,url:req.url,coupondata:coupondata});
        });
});
}
exports.loyalty_program_buy = function(req, res) {
    session=req.session;
    config.con.query("SELECT * FROM hotel",(err,hotels) => {
        let user = '';
        if(session.user_id !== undefined){
            config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
                if(err){res.redirect('/logout');}else{
                    if(result.length > 0){
                        user = result[0];
                    }else{
                        res.redirect('/logout');
                    }
                }
                res.render('loyalty_program_buy',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user,id:req.params.id});
            });
        }else{
            res.render('loyalty_program_buy',{APP_URL : config.APP_URL,hotels:hotels,url:req.url,user:user,id:req.params.id});
        }
    });
}
exports.loyalty_program_view = function(req, res) {
session=req.session;
if(req.params.id == 1){
    var amount = 20000;
}else if(req.params.id == 2){
    var amount = 8000;
}
var things = ['A', 'E', 'B', 'F', 'C', 'G', 'D', 'H', 'T', 'Z'];
var one = things[Math.floor(Math.random()*things.length)];
var tow = things[Math.floor(Math.random()*things.length)];
var three = things[Math.floor(Math.random()*things.length)];
var four = things[Math.floor(Math.random()*things.length)];
var five = things[Math.floor(Math.random()*things.length)];
var coupon = one+tow+three+four+five+Date.now();
const date = require('date-and-time');
const now = new Date();
var date_of_purchase = date.format(now,'YYYY/MM/DD HH:mm:ss');
var photo_id_card = '';
config.con.query("INSERT INTO `loyalty_program`(`name`, `mobile`, `email`, `date_of_purchase`, `occupation`, `no_of_person_in_family`, `photo_id_card`, `hotel_id`, `full_communication_address`, `coupon_no`, `member_type`) VALUES ('"+req.body.name+"','"+req.body.mobile+"','"+req.body.email+"','"+date_of_purchase+"','"+req.body.occupation+"','"+req.body.no_of_person_in_family+"','"+photo_id_card+"','"+req.body.hotel_id+"','"+req.body.full_communication_address+"','"+coupon+"','"+req.params.id+"')",(err,result) => {
        config.con.query("SELECT * FROM loyalty_program WHERE id="+result.insertId,(err,resulta) => {
            if(err){res.redirect('/loyalty-program');}else{
                if(resulta.length > 0){
                    coupondata = resulta[0];
                }else{
                    res.redirect('/loyalty-program');
                }
            }
            res.render('loyalty_program_view',{APP_URL : config.APP_URL,url:req.url,coupondata:coupondata});
        });
});
}
exports.hotelroomdetail = function(req, res) {
session=req.session;
let qu;
    if((req.query.destination !== undefined) && (req.query.hotel !== undefined)){
        var book = 1;
        qu = "SELECT hotel_room.*,hotel.hotel_name,hotel.facilities,hotel.city,hotel.location FROM hotel_room INNER JOIN hotel ON hotel_room.hotel_id=hotel.id WHERE hotel.city='"+req.query.destination+"' AND hotel_room.hotel_id='"+req.query.hotel+"'";
    }else if((req.query.destination !== undefined)){
        var book = 1;
        qu = "SELECT hotel_room.*,hotel.hotel_name,hotel.facilities,hotel.city,hotel.location FROM hotel_room INNER JOIN hotel ON hotel_room.hotel_id=hotel.id WHERE hotel.city='"+req.query.destination+"'";
    }else if(req.query.hotel !== undefined){
        var book = 1;
        qu = "SELECT hotel_room.*,hotel.hotel_name,hotel.facilities,hotel.city,hotel.location FROM hotel_room INNER JOIN hotel ON hotel_room.hotel_id=hotel.id WHERE hotel_room.hotel_id='"+req.query.hotel+"'"
    }else{
        var book = 0;
        qu = "SELECT hotel_room.*,hotel.hotel_name,hotel.facilities,hotel.city,hotel.location FROM hotel_room INNER JOIN hotel ON hotel_room.hotel_id=hotel.id"
    }
    config.con.query(qu,(err,hotels) => {
        let user = '';
        let reurl = req.url.replace("/hotelroomdetail?", "");
        if(session.user_id !== undefined){
            config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
                if(err){res.redirect('/logout');}else{
                    if(result.length > 0){
                        user = result[0];
                    }else{
                        res.redirect('/logout');
                    }
                }
                res.render('hotel-room-detail',{APP_URL : config.APP_URL,hotels:hotels,url:reurl,user:user,book:book});
            });
        }else{
            res.render('hotel-room-detail',{APP_URL : config.APP_URL,hotels:hotels,url:reurl,user:user,book:book});
        }
    });
}
exports.detailhotel = function(req, res) {
session=req.session;
let user = '';
var id = req.params.id ? req.params.id:2
config.con.query("SELECT hotel_room.*, hotel.city, hotel.hotel_name, hotel.hotel_images FROM `hotel_room` INNER JOIN hotel ON hotel_room.hotel_id=hotel.id WHERE hotel_room.id="+id,(err,hotel_room) => {
    if(hotel_room.length > 0){
        hotel_room = hotel_room[0];
    }else{
        res.redirect('/hotels');
    }
if(session.user_id !== undefined){
    config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
        if(err){res.redirect('/logout');}else{
            if(result.length > 0){
                user = result[0];
            }else{
                res.redirect('/logout');
            }
        }
        res.render('detailhotel',{APP_URL : config.APP_URL,url:req.url,user:user,hotel_room:hotel_room});
    });
    
}else{
    res.render('detailhotel',{APP_URL : config.APP_URL,url:req.url,user:user,hotel_room:hotel_room});
}
});
}
exports.career = function(req, res) {
session=req.session;
            let user = '';
if(session.user_id !== undefined){
    config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
        if(err){res.redirect('/logout');}else{
            if(result.length > 0){
                user = result[0];
            }else{
                res.redirect('/logout');
            }
        }
        res.render('career',{APP_URL : config.APP_URL,url:req.url,user:user});
    });
}else{
    res.render('career',{APP_URL : config.APP_URL,url:req.url,user:user});
}
}
exports.aboutus = function(req, res) {
session=req.session;
            let user = '';
if(session.user_id !== undefined){
    config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
        if(err){res.redirect('/logout');}else{
            if(result.length > 0){
                user = result[0];
            }else{
                res.redirect('/logout');
            }
        }
        res.render('aboutus',{APP_URL : config.APP_URL,url:req.url,user:user});
    });
}else{
    res.render('aboutus',{APP_URL : config.APP_URL,url:req.url,user:user});
}
}
exports.covidupdate = function(req, res) {
session=req.session;
            let user = '';
if(session.user_id !== undefined){
    config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
        if(err){res.redirect('/logout');}else{
            if(result.length > 0){
                user = result[0];
            }else{
                res.redirect('/logout');
            }
        }
        res.render('covidupdate',{APP_URL : config.APP_URL,url:req.url,user:user});
    });
}else{
    res.render('covidupdate',{APP_URL : config.APP_URL,url:req.url,user:user});
}
}
exports.best_rate_guaranteed = function(req, res) {
    session=req.session;
                let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('best_rate_guaranteed',{APP_URL : config.APP_URL,url:req.url,user:user});
        });
    }else{
        res.render('best_rate_guaranteed',{APP_URL : config.APP_URL,url:req.url,user:user});
    }
}
exports.leadership = function(req, res) {
session=req.session;
            let user = '';
if(session.user_id !== undefined){
    config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
        if(err){res.redirect('/logout');}else{
            if(result.length > 0){
                user = result[0];
            }else{
                res.redirect('/logout');
            }
        }
        res.render('leadership',{APP_URL : config.APP_URL,url:req.url,user:user});
    });
}else{
    res.render('leadership',{APP_URL : config.APP_URL,url:req.url,user:user});
}
}
exports.privacy_policy = function(req, res) {
session=req.session;
            let user = '';
if(session.user_id !== undefined){
    config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
        if(err){res.redirect('/logout');}else{
            if(result.length > 0){
                user = result[0];
            }else{
                res.redirect('/logout');
            }
        }
        res.render('privacy_policy',{APP_URL : config.APP_URL,url:req.url,user:user});
    });
}else{
    res.render('privacy_policy',{APP_URL : config.APP_URL,url:req.url,user:user});
}
}
exports.partner_with_as = function(req, res) {
session=req.session;
            let user = '';
if(session.user_id !== undefined){
    config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
        if(err){res.redirect('/logout');}else{
            if(result.length > 0){
                user = result[0];
            }else{
                res.redirect('/logout');
            }
        }
        res.render('partner_with_as',{APP_URL : config.APP_URL,url:req.url,user:user});
    });
}else{
    res.render('partner_with_as',{APP_URL : config.APP_URL,url:req.url,user:user});
}
}
exports.cancellation_policy = function(req, res) {
session=req.session;
            let user = '';
if(session.user_id !== undefined){
    config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
        if(err){res.redirect('/logout');}else{
            if(result.length > 0){
                user = result[0];
            }else{
                res.redirect('/logout');
            }
        }
        res.render('cancellation_policy',{APP_URL : config.APP_URL,url:req.url,user:user});
    });
}else{
    res.render('cancellation_policy',{APP_URL : config.APP_URL,url:req.url,user:user});
}
}
exports.flexible_cancellation = function(req, res) {
    session=req.session;
                let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('flexible_cancellation',{APP_URL : config.APP_URL,url:req.url,user:user});
        });
    }else{
        res.render('flexible_cancellation',{APP_URL : config.APP_URL,url:req.url,user:user});
    }
}
exports.ecocommitment_go_green = function(req, res) {
    session=req.session;
                let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('ecocommitment_go_green',{APP_URL : config.APP_URL,url:req.url,user:user});
        });
    }else{
        res.render('ecocommitment_go_green',{APP_URL : config.APP_URL,url:req.url,user:user});
    }
}
exports.food_delivery = function(req, res) {
    session=req.session;
                let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('food_delivery',{APP_URL : config.APP_URL,url:req.url,user:user});
        });
    }else{
        res.render('food_delivery',{APP_URL : config.APP_URL,url:req.url,user:user});
    }
}
exports.download_brochure = function(req, res) {
    session=req.session;
                let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('download_brochure',{APP_URL : config.APP_URL,url:req.url,user:user});
        });
    }else{
        res.render('download_brochure',{APP_URL : config.APP_URL,url:req.url,user:user});
    }
}
exports.booked = function(req, res) {
    session=req.session;
                let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('booked',{APP_URL : config.APP_URL,url:req.url,user:user});
        });
    }else{
        res.render('booked',{APP_URL : config.APP_URL,url:req.url,user:user});
    }
}
exports.thankyou = function(req, res) {
    session=req.session;
                let user = '';
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('thankyou',{APP_URL : config.APP_URL,url:req.url,user:user});
        });
    }else{
        res.render('thankyou',{APP_URL : config.APP_URL,url:req.url,user:user});
    }
}
exports.booknow = function(req, res) {
    session=req.session;
    let user = '';
    if(req.body.name !== undefined){
        config.con.query("INSERT INTO `booking`(`name`, `email`, `mobile`, `country`, `address`, `city`, `additional`, `destination`, `hotel_id`, `checkin`, `checkout`, `room`, `room_id`, `status`) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.mobile+"','"+req.body.country+"','"+req.body.address+"','"+req.body.city+"','"+req.body.additional+"','"+req.query.destination+"','"+req.query.hotel+"','"+req.query.checkin+"','"+req.query.checkout+"','"+req.query.room+"','"+req.query.room_id+"','pending')",(err,result) => {
            if(err) console.log(err);
            res.redirect('booked');
        });
    }else{
    const date = require('date-and-time');
    config.con.query("SELECT hotel_room.*,hotel.hotel_name,hotel.facilities,hotel.city,hotel.location FROM hotel_room INNER JOIN hotel ON hotel_room.hotel_id=hotel.id WHERE hotel_room.id='"+req.query.room_id+"'",(err,hotels) => {
        // console.log(hotels[0]);
    if(session.user_id !== undefined){
        config.con.query("SELECT * FROM user WHERE id="+session.user_id,(err,result) => {
            if(err){res.redirect('/logout');}else{
                if(result.length > 0){
                    user = result[0];
                }else{
                    res.redirect('/logout');
                }
            }
            res.render('booknow',{APP_URL : config.APP_URL,url:req.url,user:user,date:date,rebo:req.query,hotels:hotels});
        });
    }else{
        res.render('booknow',{APP_URL : config.APP_URL,url:req.url,user:user,date:date,rebo:req.query,hotels:hotels[0]});
    }
});
    }
}
exports.booking = function(req, res) {
    session=req.session;
    let user = '';
    if(req.body.name !== undefined){
        config.con.query("INSERT INTO `booking`(`name`, `email`, `mobile`, `country`, `address`, `city`, `additional`, `destination`, `hotel_id`, `checkin`, `checkout`, `room`, `room_id`, `status`) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.mobile+"','"+req.body.country+"','"+req.body.address+"','"+req.body.city+"','"+req.body.additional+"','"+req.body.destination+"','"+req.body.hotel_id+"','"+req.body.checkin+"','"+req.body.checkout+"','"+req.body.room+"','"+req.body.room_id+"','pending')",(err,result) => {
            if(err) console.log(err);
            res.redirect('booked');
        });
    }else{
        res.redirect('hotels');
    }
}
exports.contact = function(req, res) {
    session=req.session;
    let user = '';
    if(req.body.name !== undefined){
        config.con.query("INSERT INTO `contant`(`name`, `mobile`, `email`, `message`) VALUES ('"+req.body.name+"','"+req.body.mobile+"','"+req.body.email+"','"+req.body.message+"')",(err,result) => {
            if(err) console.log(err);
            res.redirect('thankyou');
        });
    }
}
exports.login = function(req, res) {
session=req.session;
    if(session.user_id == undefined){
        if((req.body.email !== undefined) && (req.body.password !== undefined)){
            config.con.query("SELECT * FROM user WHERE email='"+req.body.email+"' AND password='"+req.body.password+"'",(err,result) => {
                if(err){res.redirect(req.body.url);}else{
                    if(result.length > 0){
                        session.user_id = result[0].id;
                        res.redirect(req.body.url);
                    }else{
                        res.redirect(req.body.url);
                    }
                }
            });
        }
    }else{
        res.redirect(req.body.url);
    }
}
exports.register = function(req, res) {
session=req.session;
    if(session.user_id == undefined){
        if((req.body.email !== undefined) && (req.body.password !== undefined)){
            config.con.query("INSERT INTO `user`(`name`, `email`, `phone`, `password`) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.phone+"','"+req.body.password+"')",(err,result) => { 
                if(err){res.redirect(req.body.url);}else{
                    if(result.affectedRows > 0){
                        session.user_id = result.insertId;
                        res.redirect(req.body.url);
                    }else{
                        res.redirect(req.body.url);
                    }
                }
            });
        }
    }else{
        res.redirect(req.body.url);
    }
}