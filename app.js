var redis = require('redis');
var client = redis.createClient();

client.on('connect',function(){
    console.log("connected");
});

client.set('adam','douglas',function(err, reply){
	console.log(reply);
});

client.set('name','adam douglas');
client.expire('name',40);


client.get('adam',function(err, reply){
	console.log(reply);
});

client.hmset('books', {
   'book1': 'Hitchhikers Guide',
          'book2': 'Galaxy',
         'book3':'Sherlock Holmes'
});

client.hgetall('books', function(err, object) {
       console.log(object);
});

client.rpush(['book1','book2','book3','book4'],function(err, reply){
	console.log(reply);
});

client.lpush(['node_modules','express','body-parser'], function(err, reply){
	console.log(reply);
});

client.lrange('node_modules', 0, -1, function(err, object){
	console.log(object);
});

client.sadd(['tags', 'angular','ember','backbone'], function(err, reply){
	console.log(reply);
});

client.smembers('tags', function(err, reply){
	console.log(reply);
});

client.exists('tags',function(err, reply){
	if(reply === 1) 
		console.log('exists');
	else
		console.log('doesnt exist');
});

client.del('frameworks', function(err, reply){
	console.log(reply);
});

client.set('key1', 10, function() {
    client.incr('key1', function(err, reply) {
        console.log(reply); // 11
    });
});

client.set('key2', 10, function() {
    client.decr('key2', function(err, reply) {
        console.log(reply); // 9
    });
});
