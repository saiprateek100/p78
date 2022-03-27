var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://chat.google.com/api/get_hangouts_attachment_url?url_type=FIFE_URL&attachment_token=AOe91x0FQ7Mt-KfSczt6DEZTvCvTgFlkntho7UE4g-DGSIBWpaq6syI3O5g_LPd1KB5A396Pn6uEocB1G5dA6lSlx53r0aFuQrFURDgtsFgC5U9N4LHVzPj5TAI-4qyXH8hcXf2Gv-92i0KV8h1Ra_J-knX64YA-d-CqshRdcSNLuCgfW-P5GPmeKi3enukKyQWJCXDAgz7oCMPlWXjcaZSDYP_lRqiLl216Ck6j1REVhS6Bs9EglgEpmEKLPxEMEgl4xg-OKCqyew%3D%3D&width=3468&height=4624", "https://chat.google.com/api/get_hangouts_attachment_url?url_type=FIFE_URL&attachment_token=AOe91x3vlAmLCqJibiSR44GQe_acfg-hWVvzWKcCiSZqZfKR4xK2HqCrkuY1mO0Ji2j1iAJaxJs-nuPC2OgGl4vg7DiwKbBpNu9RJO8Iz5mKxsFs8nLYlQytkwOl3WTw129JnmJZukLxcsSLWAKMs50xO7VxMtDuzImFCWzEuDvOv2ciS-SUJ-Pqv46K_2YMN3u7WbflXTtM7TYl7jfTrHy4Z62elmC1KahJwGJNyhWBUP9Nb2mazBkHsf2dloUKBRGyrs_J0DLnrw%3D%3D&width=3468&height=4624" , "https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fjpeg&attachment_token=AAUuIGsY0eZQ3sQs7qbCesRvBS5jUO6W34aXlmonZuKsJTqEOBajgsth2OFQPWD52teE8%2BNh48N0D8GJ5t8GP2PhNPsx%2BRJsVIqOgQ474VHbm9J3CetgfZZaMJ8lfn8rKo3majHFCZJvpcMJT%2BdLcYmVPtrauqqEPHxiOUfmDS%2BL1L%2B6rIbMYmbmP4YkWI70d5VRB1f%2BMEtTx%2Bmy1hkYY3WKbv%2BcZXEqijsHlnoxJNef3kYYa77ApJNkNFt7T33fxxAr4%2FWyK%2B3mfk%2FbyKBeEsK9%2BDM6%2BxZooq1OeKQlaED8fUEQ%2BY32MqbQUt1GTWp9roTtKO5FqD%2B%2Fn74f4bcyiVzvsmyTaDw9i0VXyaqiyhnaOWjeWi5GKLHBXYc6NGQRyJ5tfaTeo5UfEEcwyK7CXnIwxEUVi5b1lefQvq7O&sz=w512", "https://chat.google.com/api/get_hangouts_attachment_url?url_type=FIFE_URL&attachment_token=AOe91x32-8EkA1Cz8BK-zJhH3v55TdTs-ONMIAQUvsuP6ozm4zfEmZXQawjNjwEEdgXa1oE46A3d4pi7X1UYtB2a5FvjEOrpdfclsZ84E4C5tgbi-QS4CNCxNF0dLovFFvx8orC7Iv73SJaXZZMiR8OtpzDqjyNun3mLs7wGFfnqPwSLpJOg8Y1fI2tb241U-ucyds3AGp9rPAwMWYO5excS03f2-MiV_xIlYHJjZ_Bbl6WVkf17ngkse7WYlZZhNEM1zt7-IpLM7w%3D%3D&width=3468&height=4624"];
var names = ["Fmaily Book","Sai prateek", "Sunita pattanayak", "Niranjan pattanayak", "Sai prasad"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
