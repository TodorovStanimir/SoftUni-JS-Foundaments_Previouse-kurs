function city(name, area, population, country, postCode) {
    let town = {
        name,
        area,
        population,
        country,
        postCode
    }

    for (const key in town) {
        console.log(`${key} -> ${town[key]}`);
    }
}
city("Sofia", " 492", "1238438", "Bulgaria", "1000");