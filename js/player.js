class Player
{
    constructor()
    {
        this.name = "";
        this.distance = 0;
        this.index = null;
        

    }

    getCount()
        { 
            var playerRef = database.ref("playerCount");
            playerRef.on("value",function(data)
            {
                playerCount = data.val();
            })
        }

        updateCount(count)
        {
            database.ref("/").update({playerCount : count})
        }

        update()
        {
            var playerIndex  = "Players/player" + this.index;
            database.ref(playerIndex).set({name : this.name, distance : this.distance})
        }

        static getPlayerInfo()
        {
            var referenceNode = database.ref("Players");
            referenceNode.on("value",(data)=>{
                allPlayers = data.val();
            });

}
     
}