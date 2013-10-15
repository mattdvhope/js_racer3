get '/' do

  erb :index
end

post '/board' do
  @player1 = Player.create(name: params[:player1])
  @player2 = Player.create(name: params[:player2])
  @game = Game.create(params[:id])
  redirect "/board/#{@game.id}"
end

get '/board/:id' do
  @game = Game.find(params[:id])
  @player2 = Player.last
  @player1 = Player.find(@player2.id - 1)
  erb :board
end



