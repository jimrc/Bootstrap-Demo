var popData = [ 
    { "x": 1,"y": 5, "count": 13},  
    { "x": 2,"y": 4, "count": 20},  
    { "x": 3,"y": 2, "count": 31},  
    { "x": 4,"y": 3, "count": 13},  
    { "x": 5,"y": 1, "count": 26},  
    { "x": 6,"y": 3, "count": 28},  
    { "x": 7,"y": 1, "count": 24},  
    { "x": 8,"y": 4, "count": 28},  
    { "x": 9,"y": 2, "count": 20},  
    { "x": 10,"y": 5, "count": 22} ,
    { "x": 11,"y": 4, "count": 12} ,
    { "x": 12,"y": 2, "count": 28} ,
    { "x": 13,"y": 3, "count": 19} ,
    { "x": 14,"y": 1, "count": 13} ,
    { "x": 15,"y": 5, "count": 24} ,
    { "x": 16,"y": 4, "count": 12} ,
    { "x": 17,"y": 2, "count": 13} ,
    { "x": 18,"y": 5, "count": 21} ,
    { "x": 19,"y": 1, "count": 24} ,
    { "x": 20,"y": 3, "count": 11}, 
    { "x": 21,"y": 5, "count": 18}, 
    { "x": 22,"y": 1, "count": 14}, 
    { "x": 23,"y": 4, "count": 25}, 
    { "x": 24,"y": 3, "count": 22}, 
    { "x": 25,"y": 2, "count": 20}, 
    { "x": 26,"y": 5, "count": 26}, 
    { "x": 27,"y": 4, "count": 26}, 
    { "x": 28,"y": 3, "count": 15}, 
    { "x": 29,"y": 2, "count": 25}, 
    { "x": 30,"y": 1, "count": 29}, 
    { "x": 31,"y": 5, "count": 25}, 
    { "x": 32,"y": 4, "count": 10}, 
    { "x": 33,"y": 1, "count": 14}, 
    { "x": 34,"y": 3, "count": 18}, 
    { "x": 35,"y": 2, "count": 28}, 
    { "x": 36,"y": 2, "count": 21}, 
    { "x": 37,"y": 1, "count": 21}, 
    { "x": 38,"y": 5, "count": 19}, 
    { "x": 39,"y": 3, "count": 22}, 
    { "x": 40,"y": 4, "count": 14}, 
    { "x": 41,"y": 1, "count": 10}, 
    { "x": 42,"y": 5, "count": 17}, 
    { "x": 43,"y": 3, "count": 14}, 
    { "x": 44,"y": 2, "count": 20}, 
    { "x": 45,"y": 4, "count": 10}, 
    { "x": 46,"y": 3, "count": 27}, 
    { "x": 47,"y": 4, "count": 16}, 
    { "x": 48,"y": 5, "count": 20}, 
    { "x": 49,"y": 1, "count": 16}, 
    { "x": 50,"y": 2, "count": 17}, 
    { "x": 51,"y": 3, "count": 31}, 
    { "x": 52,"y": 1, "count": 27}, 
    { "x": 53,"y": 4, "count": 16}, 
    { "x": 54,"y": 5, "count": 19}, 
    { "x": 55,"y": 2, "count": 11}, 
    { "x": 56,"y": 4, "count": 29}, 
    { "x": 57,"y": 1, "count": 27}, 
    { "x": 58,"y": 2, "count": 29}, 
    { "x": 59,"y": 3, "count": 15}, 
    { "x": 60,"y": 5, "count": 25}, 
    { "x": 61,"y": 3, "count": 19}, 
    { "x": 62,"y": 5, "count": 12}, 
    { "x": 63,"y": 1, "count": 23}, 
    { "x": 64,"y": 4, "count": 21}, 
    { "x": 65,"y": 2, "count": 16}, 
    { "x": 66,"y": 2, "count": 23}, 
    { "x": 67,"y": 4, "count": 22}, 
    { "x": 68,"y": 1, "count": 32}, 
    { "x": 69,"y": 5, "count": 15}, 
    { "x": 70,"y": 3, "count": 21}, 
    { "x": 71,"y": 1, "count": 21}, 
    { "x": 72,"y": 5, "count": 12}, 
    { "x": 73,"y": 4, "count": 23}, 
    { "x": 74,"y": 3, "count": 26}, 
    { "x": 75,"y": 2, "count": 27}, 
    { "x": 76,"y": 4, "count": 18}, 
    { "x": 77,"y": 1, "count": 20}, 
    { "x": 78,"y": 5, "count": 18}, 
    { "x": 79,"y": 2, "count": 20}, 
    { "x": 80,"y": 3, "count": 16}, 
    { "x": 81,"y": 3, "count": 10}, 
    { "x": 82,"y": 1, "count": 19}, 
    { "x": 83,"y": 2, "count": 18}, 
    { "x": 84,"y": 4, "count": 18}, 
    { "x": 85,"y": 5, "count": 11}, 
    { "x": 86,"y": 1, "count": 29}, 
    { "x": 87,"y": 4, "count": 15}, 
    { "x": 88,"y": 5, "count": 17}, 
    { "x": 89,"y": 2, "count": 14}, 
    { "x": 90,"y": 3, "count": 10}, 
    { "x": 91,"y": 2, "count": 15}, 
    { "x": 92,"y": 5, "count": 22}, 
    { "x": 93,"y": 4, "count": 17}, 
    { "x": 94,"y": 3, "count": 18}, 
    { "x": 95,"y": 1, "count": 16}, 
    { "x": 96,"y": 1, "count": 15}, 
    { "x": 97,"y": 4, "count": 12}, 
    { "x": 98,"y": 2, "count": 21}, 
    { "x": 99,"y": 3, "count": 17}, 
    { "x": 100,"y": 5, "count": 16}
]
