const showContent = () => {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
};

const fetchPoke = async () => {
const pokeName = document.getElementById('pokeName').value.toLowerCase();
if (pokeName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    
    if (response.ok) {
        const data = await response.json();
        const pokeSprite = data.sprites.front_default;
        const PokeImg = document.getElementById("pokeImg");
        PokeImg.src = pokeSprite;
        PokeImg.style.display = "block";
        const abilities = data.abilities.map(ability => ability.ability.name).join(" , ");
        const weight = data.weight;
        const ability= document.getElementById("ability")
        const height = data.height
        const type = data.types.map(types =>types.type.name).join(" , ");
        console.log(type);
        
        
        ability.innerHTML=`<p><strong>Abilities</strong> : ${abilities}</p>
        <p><strong>Weight</strong> : ${weight}</p>
        <p><strong>Height</strong> : ${height}</p>
        <p><strong>Types</strong> : ${type}</p>
        `
        
    } else {
        alert("Pokemon not found!");
        pokeImg.style.display = "none";
        ability.innerHTML = "";
    }
} else {
    alert("Please enter a Pokemon name!");
    pokeImg.style.display = "none";
    ability.innerHTML = "";
}
}