import type { Client } from "@/types";

/**
 * Client roster — names, order and URLs exactly as supplied by the client.
 * `logo`: filename in /public/images/clients that genuinely contains this
 * client's artwork (files named after other brands are template leftovers,
 * not usable logos — those clients render the name-tile fallback until real
 * artwork is supplied).
 * `url`: empty string when the client hasn't provided one yet — the card
 * renders non-clickable and the URL can be dropped in later.
 */
export const CLIENTS: Client[] = [
  { name: "Ivy Tree", logo: "ivytreeessex.co.uk.png", url: "https://www.ivytreeessex.co.uk/" },
  { name: "GBD", logo: "greatbritishdoner.com.png", url: "https://www.greatbritishdoner.com/" },
  { name: "Biitest", logo: "", url: "https://biitest.com/" },
  { name: "Leila", logo: "leilabrasserie.co.uk.png", url: "https://leilabrasserie.co.uk/" },
  { name: "Carnivoor", logo: "carnivoorkitchen.com.png", url: "https://www.carnivoorkitchen.com/" },
  { name: "Direct Pizza", logo: "thedirectpizzaco.co.uk.jpg", url: "https://thedirectpizzaco.co.uk/index.php?page=home" },
  { name: "Sofra", logo: "sofra.co.uk.jpg", url: "https://www.sofra.co.uk/" },
  { name: "Jennys Café", logo: "jennys-brackleyonline.co.uk.png", url: "https://jennys-brackleyonline.co.uk/" },
  { name: "Antep Kitchen", logo: "antepkitchen.co.uk.jpg", url: "https://www.antepkitchen.co.uk/" },
  { name: "Gusto Ricco", logo: "gusto-ricco.png", url: "https://www.gustoricco.com/" },
  { name: "Masa", logo: "masarestaurant.com.tr-en.png", url: "https://www.masarestaurant.com.tr/en" },
  { name: "Pide Co", logo: "pide-co.com.png", url: "https://pide-co.com/" },
  { name: "Beboz", logo: "beboz.png", url: "https://www.beboz.com/" },
  { name: "Sensei 4", logo: "sensei.png", url: "" },
  { name: "Solo Kitchen", logo: "thesolo.co.uk.png", url: "https://www.thesolo.co.uk/" },
  { name: "The Shire grill", logo: "theshiregrill.co.uk.jpg", url: "https://theshiregrill.co.uk/" },
  { name: "Phoenix", logo: "phoenix-solutions-logo1.png", url: "" },
  { name: "Mysa", logo: "mysarestaurant.co.uk.png", url: "http://mysarestaurant.co.uk/" },
  { name: "Zone", logo: "zone-essex.png", url: "" },
  { name: "Anatolian Turkish Kitchen", logo: "anatolian.png", url: "https://www.anatoliansouthampton.com/" },
  { name: "Turkuaz", logo: "", url: "https://www.turkuaz-restaurant.co.uk/" },
  { name: "Lizz", logo: "", url: "https://lizzrestaurant.co.uk/" },
  { name: "42 Holborn", logo: "", url: "https://42holborn.com/" },
  { name: "Alkis", logo: "", url: "https://www.alkisrestaurant.co.uk/" },
  { name: "Brudis", logo: "", url: "" },
  { name: "Brekky & Brunch", logo: "", url: "" },
  { name: "Liman", logo: "", url: "https://www.liman.co.uk/" },
  { name: "Swiss Sent", logo: "", url: "" },
  { name: "Rustiq", logo: "", url: "https://rustiqrestaurant.co.uk/" },
  { name: "Petrol Ofisi", logo: "", url: "https://www.petrolofisi.com.tr/" },
  { name: "Payiz", logo: "", url: "https://payizrestaurant.co.uk/" },
  { name: "Otto Kitchen", logo: "", url: "https://otto-kitchen.co.uk/" },
  { name: "Leonidas", logo: "", url: "https://leonidas-lezzetleri.com.tr/" },
  { name: "Cutty Sark", logo: "", url: "" },
  { name: "Iznik", logo: "", url: "https://iznik.co.uk/" },
  { name: "No5 Dining & Lounge", logo: "", url: "https://no5dining.co.uk/" },
  { name: "Mangal Meze", logo: "", url: "https://www.mangalmeze.com/" }
];
