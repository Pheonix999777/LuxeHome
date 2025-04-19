import LivingRoom from "../../public/img/Living Room 18_09_37.png";
import Bedroom from "../../public/img/Bedroom 18_13_48.png";
import Dining from "../../public/img/Dining18_29_21.png";
import Office from "../../public/img/Office.png";
import Sofa from "../../public/img/sofa-8754140_640.jpg";
import Interior from "../../public/img/interior-4138392_640.jpg";
import OfficeChair from "../../public/img/Ergonomic Office Chair.jpg";
import WoodenBed from "../../public/img/wooden-bed-4855818_640.jpg";
import AccentArmchair from "../../public/img/Accent Armchair.jpg";
import StorageOttoman from "../../public/img/Storage Ottoman.jpg";
import BookshelfDrawers from "../../public/img/Bookshelf with Drawers.jpg";
import NightstandUSBPorts from "../../public/img/Nightstand with USB Ports.jpg";
import GlassCoffeeTable from "../../public/img/Glass Coffee Table.jpg";
import LeatherRecliner from "../../public/img/Leather Recliner.avif";
import HowToChoose from "../../public/img/How to Choose the Perfect Sofa for Your Space (1).jpg";
import TipsForCreating from "../../public/img/5 Tips for Creating a Productive Home Office (1).jpg";
import TheArtMixing from "../../public/img/The Art of Mixing Wood Tones in Interior Design (1).jpg";
import SustainableFurniture from "../../public/img/Sustainable Furniture.jpg";
import SmallSpaceSolutions from "../../public/img/Small Space Solutions.jpg";
import type { Product } from "@/types/product";

// Categories
export function getCategories() {
  return [
    {
      id: "1",
      name: "Living Room",
      slug: "living-room",
      image: LivingRoom,
      description: "Stylish and comfortable furniture for your living space.",
    },
    {
      id: "2",
      name: "Bedroom",
      slug: "bedroom",
      image: Bedroom,
      description: "Create a peaceful retreat with our bedroom collections.",
    },
    {
      id: "3",
      name: "Dining",
      slug: "dining",
      image: Dining,
      description: "Elegant dining tables and chairs for memorable meals.",
    },
    {
      id: "4",
      name: "Office",
      slug: "office",
      image: Office,
      description: "Functional and stylish furniture for your workspace.",
    },
  ];
}

export function getCategoryBySlug(slug: string) {
  return getCategories().find((category) => category.slug === slug);
}

// Products
export function getAllProducts(): Product[] {
  return [
    {
      id: "1",
      name: "Modern Sofa",
      price: 1299.99,
      image: Sofa,
      category: "Living Room",
      categorySlug: "living-room",
      rating: 4.5,
      reviewCount: 12,
      description:
        "A sleek and comfortable sofa with clean lines and premium upholstery. Perfect for modern living spaces.",
      colors: ["Gray", "Navy", "Beige"],
      materials: ["Fabric", "Wood"],
      details: [
        "Solid wood frame",
        "High-density foam cushions",
        "Stain-resistant fabric",
        "Removable cushion covers",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: "2",
      name: "Scandinavian Dining Table",
      price: 899.99,
      image: Interior,
      category: "Dining",
      categorySlug: "dining",
      rating: 5,
      reviewCount: 8,
      description:
        "Minimalist dining table crafted from solid oak with a natural finish. Seats up to six people comfortably.",
      colors: ["Natural", "Walnut", "White"],
      materials: ["Wood"],
      details: [
        "Solid oak construction",
        "Water-resistant finish",
        "Easy assembly",
        "Adjustable feet for uneven floors",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: "3",
      name: "Ergonomic Office Chair",
      price: 349.99,
      oldPrice: 429.99,
      image: OfficeChair,
      category: "Office",
      categorySlug: "office",
      rating: 4.7,
      reviewCount: 23,
      description:
        "Fully adjustable office chair with lumbar support and breathable mesh back for all-day comfort.",
      colors: ["Black", "Gray", "Blue"],
      materials: ["Fabric", "Metal"],
      details: [
        "Adjustable height and armrests",
        "Breathable mesh back",
        "Lumbar support",
        "360° swivel",
        "Weight capacity: 300 lbs",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: "4",
      name: "Platform Bed Frame",
      price: 799.99,
      image: WoodenBed,
      category: "Bedroom",
      categorySlug: "bedroom",
      rating: 4.8,
      reviewCount: 15,
      description:
        "Modern platform bed with integrated headboard and solid wood construction. No box spring needed.",
      colors: ["Walnut", "Oak", "Black"],
      materials: ["Wood"],
      details: [
        "Solid wood construction",
        "Integrated headboard",
        "No box spring needed",
        "Under-bed storage space",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: "5",
      name: "Accent Armchair",
      price: 499.99,
      image: AccentArmchair,
      category: "Living Room",
      categorySlug: "living-room",
      rating: 4.6,
      reviewCount: 9,
      description:
        "Stylish accent chair with plush cushioning and solid wood legs. Perfect for reading corners or as additional seating.",
      colors: ["Emerald", "Mustard", "Blush"],
      materials: ["Fabric", "Wood"],
      details: [
        "Solid wood frame",
        "High-density foam cushion",
        "Stain-resistant fabric",
        "Non-marking feet",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: "6",
      name: "Storage Ottoman",
      price: 249.99,
      oldPrice: 299.99,
      image: StorageOttoman,
      category: "Living Room",
      categorySlug: "living-room",
      rating: 4.3,
      reviewCount: 7,
      description:
        "Multifunctional ottoman with hidden storage space and padded top. Use as a footrest, extra seating, or coffee table.",
      colors: ["Gray", "Cream", "Brown"],
      materials: ["Fabric", "Wood"],
      details: [
        "Hidden storage compartment",
        "Padded lift-up lid",
        "Sturdy construction",
        "Easy to clean fabric",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: "7",
      name: "Bookshelf with Drawers",
      price: 399.99,
      image: BookshelfDrawers,
      category: "Living Room",
      categorySlug: "living-room",
      rating: 4.4,
      reviewCount: 11,
      description:
        "Versatile bookshelf with open shelving and closed storage drawers. Perfect for displaying books and organizing essentials.",
      colors: ["White", "Oak", "Black"],
      materials: ["Wood"],
      details: [
        "Combination of open and closed storage",
        "Adjustable shelves",
        "Anti-tip hardware included",
        "Easy assembly",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: "8",
      name: "Nightstand with USB Ports",
      price: 199.99,
      image: NightstandUSBPorts,
      category: "Bedroom",
      categorySlug: "bedroom",
      rating: 4.9,
      reviewCount: 14,
      description:
        "Modern nightstand with built-in USB charging ports, drawer, and open shelf for convenient bedside storage.",
      colors: ["Walnut", "White", "Gray"],
      materials: ["Wood"],
      details: [
        "Built-in USB charging ports",
        "Soft-close drawer",
        "Open shelf for display",
        "Cable management system",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: "9",
      name: "Glass Coffee Table",
      price: 349.99,
      image: GlassCoffeeTable,
      category: "Living Room",
      categorySlug: "living-room",
      rating: 4.2,
      reviewCount: 6,
      description:
        "Modern coffee table with tempered glass top and metal frame. Sleek design perfect for contemporary living rooms.",
      colors: ["Clear/Black", "Clear/Gold", "Smoked/Black"],
      materials: ["Glass", "Metal"],
      details: [
        "Tempered glass top",
        "Sturdy metal frame",
        "Non-scratch feet",
        "Easy assembly",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: "10",
      name: "Leather Recliner",
      price: 799.99,
      oldPrice: 899.99,
      image: LeatherRecliner,
      category: "Living Room",
      categorySlug: "living-room",
      rating: 4.7,
      reviewCount: 18,
      description:
        "Luxurious leather recliner with power adjustment and built-in USB charging port. Ultimate comfort for your living room.",
      colors: ["Brown", "Black", "Tan"],
      materials: ["Leather", "Wood", "Metal"],
      details: [
        "Genuine top-grain leather",
        "Power recline mechanism",
        "Built-in USB charging port",
        "Padded headrest and armrests",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
  ];
}

export function getFeaturedProducts() {
  return getAllProducts().slice(0, 4);
}

export function getProductsByCategory(categorySlug: string) {
  return getAllProducts().filter(
    (product) => product.categorySlug === categorySlug
  );
}

export function getProductById(id: string) {
  return getAllProducts().find((product) => product.id === id);
}

export function getRelatedProducts(id: string) {
  const product = getProductById(id);
  if (!product) return [];

  return getAllProducts()
    .filter((p) => p.id !== id && p.categorySlug === product.categorySlug)
    .slice(0, 4);
}

// Testimonials
export function getTestimonials() {
  return [
    {
      id: "1",
      quote:
        "The quality of the furniture exceeded my expectations. The craftsmanship is exceptional, and the customer service was outstanding from start to finish.",
      name: "Emily Johnson",
      location: "New York, NY",
      rating: 5,
    },
    {
      id: "2",
      quote:
        "We furnished our entire living room with pieces from LuxeHome, and we couldn't be happier. The designs are timeless, and the quality is built to last.",
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
    },
    {
      id: "3",
      quote:
        "The delivery was prompt, and the assembly service was worth every penny. Our new dining set is exactly what we were looking for.",
      name: "Sarah Williams",
      location: "Chicago, IL",
      rating: 4,
    },
  ];
}

// Blog Posts
export function getBlogPosts() {
  return [
    {
      id: "1",
      title: "How to Choose the Perfect Sofa for Your Space",
      excerpt:
        "Finding the right sofa involves more than just picking a style you like. Consider these factors to ensure you make the perfect choice for your home.",
      date: "2023-06-15",
      image: HowToChoose,
      category: "Buying Guides",
      author: {
        name: "Jessica Miller",
        role: "Interior Design Specialist",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Jessica has 10+ years of experience in interior design and furniture selection.",
      },
      content: [
        "When it comes to furnishing your living room, the sofa is often the centerpiece that sets the tone for the entire space. But with so many options available, how do you choose the right one?",
        "First, consider the size of your room. Measure the space where you plan to place the sofa, ensuring there's enough room for people to walk around it comfortably. A good rule of thumb is to leave at least 18 inches between the sofa and coffee table, and 30-36 inches for walkways.",
        "Next, think about your lifestyle. Do you have children or pets? If so, you'll want to choose durable, stain-resistant fabrics like microfiber or leather. If your sofa will be in a formal living room that's used less frequently, you might opt for more delicate materials.",
        "The frame is another crucial factor. Hardwood frames, such as oak, ash, or beech, are the most durable and can last for decades. Avoid sofas with frames made from particleboard, plastic, or metal, as these tend to warp and crack over time.",
        "Comfort is, of course, paramount. Test the sofa by sitting on it for at least 10 minutes. The cushions should be firm enough to support you but soft enough to be comfortable. Your feet should touch the floor when sitting back, and the depth should allow you to stand up easily.",
        "Finally, consider the style and color. While it's tempting to choose based on current trends, remember that a quality sofa is a long-term investment. Opt for classic styles and neutral colors that will stand the test of time, then add personality with throw pillows and blankets that can be easily changed.",
        "By taking these factors into account, you'll be well on your way to finding a sofa that not only looks beautiful in your space but also meets your practical needs for years to come.",
      ],
    },
    {
      id: "2",
      title: "5 Tips for Creating a Productive Home Office",
      excerpt:
        "Working from home? Learn how to design a workspace that enhances focus, comfort, and productivity.",
      date: "2023-05-22",
      image: TipsForCreating,
      category: "Design Tips",
      author: {
        name: "David Thompson",
        role: "Ergonomics Expert",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "David specializes in creating ergonomic workspaces that promote health and productivity.",
      },
      content: [
        "With remote work becoming increasingly common, creating a productive home office is more important than ever. Here are five essential tips to help you design a workspace that enhances focus, comfort, and efficiency.",
        "1. Invest in an ergonomic chair and desk setup. Your chair should provide proper lumbar support and be adjustable to your height. Position your monitor at eye level, about an arm's length away, to reduce neck strain. Your keyboard and mouse should be positioned so your elbows can rest comfortably at a 90-degree angle.",
        "2. Maximize natural light. Position your desk near a window if possible, as natural light has been shown to improve mood and energy levels. If natural light is limited, invest in full-spectrum lighting that mimics daylight.",
        "3. Minimize distractions. Choose a quiet location away from household traffic if possible. Use noise-canceling headphones if necessary, and consider using room dividers or screens to create a dedicated workspace in shared areas.",
        "4. Incorporate storage solutions. Clutter can be a significant distraction and stress inducer. Invest in appropriate storage such as filing cabinets, shelves, or desk organizers to keep your workspace tidy and organized.",
        "5. Add personal touches. While minimizing distractions is important, adding elements that inspire you can boost creativity and motivation. Consider incorporating plants, artwork, or photos that bring you joy and energy.",
        "Remember, your home office should be a space where you feel comfortable spending several hours a day. Taking the time to thoughtfully design this area will pay dividends in your productivity and well-being.",
      ],
    },
    {
      id: "3",
      title: "The Art of Mixing Wood Tones in Interior Design",
      excerpt:
        "Contrary to popular belief, you don't need to match all wood finishes in a room. Learn how to artfully mix different wood tones for a rich, layered look.",
      date: "2023-04-10",
      image: TheArtMixing,
      category: "Design Tips",
      author: {
        name: "Olivia Chen",
        role: "Interior Stylist",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Olivia has styled interiors for major design magazines and celebrity homes.",
      },
      content: [
        "One of the most common misconceptions in interior design is that all wood tones in a room must match. In reality, mixing wood finishes can create a rich, layered look that adds depth and character to your space. Here's how to do it successfully.",
        "Start by choosing a dominant wood tone. This will typically be your largest pieces of furniture or flooring. This dominant tone will serve as the foundation for your design and help guide your other choices.",
        "Next, consider the undertones of your woods. Wood finishes generally have warm (red, orange, yellow) or cool (gray, ash) undertones. While you can mix undertones, it's often easier to stay within the same temperature family for a more cohesive look.",
        "Create contrast through variation. If your dominant wood is dark, incorporate some lighter pieces to create visual interest. If your dominant wood is light, add some darker elements for depth. The key is to make these choices look intentional rather than mismatched.",
        "Use a buffer when placing different wood tones next to each other. This could be a rug between wood flooring and a coffee table, or a runner between a dining table and sideboard. These buffers help ease the transition between different finishes.",
        "Consider incorporating a unifying element. This could be a piece that combines multiple wood tones, such as a mixed-wood bookshelf or a dining table with a different colored base and top. These pieces can help tie your various wood elements together.",
        "Remember that texture plays a role too. A rustic, distressed finish creates a different feel than a smooth, polished surface, even in the same color. Mixing textures can add another dimension to your design.",
        "By following these principles, you can confidently mix wood tones to create a space that feels collected, curated, and full of character rather than flat and one-dimensional.",
      ],
    },
    {
      id: "4",
      title: "Sustainable Furniture: What to Look For",
      excerpt:
        "Navigate the world of eco-friendly furniture with our guide to sustainable materials, ethical manufacturing, and certifications to trust.",
      date: "2023-03-05",
      image: SustainableFurniture,
      category: "Sustainability",
      author: {
        name: "Marcus Green",
        role: "Sustainability Consultant",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Marcus advises furniture companies on sustainable practices and materials.",
      },
      content: [
        "As environmental awareness grows, many consumers are seeking sustainable options when furnishing their homes. But with so many claims and certifications in the marketplace, how can you identify truly eco-friendly furniture? Here's what to look for.",
        "Start by examining the materials. Sustainable furniture often uses renewable resources like bamboo, reclaimed wood, or responsibly harvested timber. Look for FSC (Forest Stewardship Council) certification, which ensures that wood products come from responsibly managed forests.",
        "Consider the manufacturing process. Furniture made with low-VOC (volatile organic compound) finishes and water-based glues is better for indoor air quality and the environment. Companies that use renewable energy in their manufacturing facilities and minimize waste also deserve attention.",
        "Durability is a key aspect of sustainability. Well-made furniture that lasts for decades keeps items out of landfills and reduces the need for replacement. Look for solid construction, quality joinery, and timeless designs that won't quickly go out of style.",
        "Local production can significantly reduce the carbon footprint associated with shipping. When possible, choose furniture made closer to home to minimize transportation emissions.",
        "Certifications can help guide your choices. Beyond FSC, look for GREENGUARD (low chemical emissions), Cradle to Cradle (sustainable, circular design), and SFC (Sustainable Furnishings Council) member companies.",
        "Finally, consider end-of-life options. Furniture that can be easily disassembled for repair or recycling represents the best in circular design principles. Some companies even offer take-back programs for their products.",
        "By considering these factors, you can make informed choices that align with your environmental values while creating a beautiful, healthy home environment.",
      ],
    },
    {
      id: "5",
      title: "Small Space Solutions: Furniture That Does Double Duty",
      excerpt:
        "Maximize your square footage with clever multifunctional furniture pieces that offer style without sacrificing function.",
      date: "2023-02-18",
      image: SmallSpaceSolutions,
      category: "Small Spaces",
      author: {
        name: "Nina Rodriguez",
        role: "Small Space Design Expert",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Nina specializes in designing functional, beautiful interiors for urban apartments and tiny homes.",
      },
      content: [
        "Living in a compact space doesn't mean sacrificing style or functionality. With the right multifunctional furniture, you can maximize every square foot while creating a home that feels spacious and welcoming. Here are some of our favorite double-duty pieces.",
        "Sofa beds have come a long way from the uncomfortable pull-outs of the past. Today's designs offer genuine comfort for both sitting and sleeping, with mechanisms that make conversion effortless. Look for models with built-in storage for bedding to further maximize space.",
        "Extendable dining tables are perfect for those who entertain occasionally but don't need a large table daily. Options range from drop-leaf designs to sophisticated tables with hidden leaves that can double or even triple the seating capacity when needed.",
        "Storage ottomans serve as footrests, extra seating, coffee tables (with a tray on top), and hidden storage for blankets, games, or other items. They're one of the most versatile pieces you can add to a small living space.",
        "Wall beds (also called Murphy beds) have experienced a renaissance, with modern systems that integrate desks, sofas, or shelving. During the day, they disappear to free up floor space; at night, they transform into comfortable sleeping areas.",
        "Nesting tables provide flexible surface area that can be expanded when you have guests and tucked away when not in use. Similarly, stackable stools can serve as side tables or extra seating as needed.",
        "Look for furniture with built-in storage wherever possible. Platform beds with drawers, coffee tables with shelves or compartments, and dining benches with storage seats all help maximize function without requiring additional space.",
        "By choosing pieces that serve multiple purposes, you can create a home that adapts to your needs throughout the day while maintaining a clean, uncluttered aesthetic that makes small spaces feel more open and inviting.",
      ],
    },
    {
      id: "6",
      title:
        "The Psychology of Color: Choosing the Right Palette for Your Home",
      excerpt:
        "Understand how different colors affect mood and perception, and learn how to create a color scheme that enhances your well-being at home.",
      date: "2023-01-25",
      image: "/placeholder.svg?height=400&width=600",
      category: "Design Tips",
      author: {
        name: "Dr. Samantha Lee",
        role: "Color Psychologist",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Dr. Lee studies the psychological and physiological effects of color in living and working environments.",
      },
      content: [
        "Color is more than just a visual experience; it has the power to influence our emotions, perceptions, and even our physical well-being. Understanding the psychology of color can help you create a home environment that supports your desired mood and lifestyle.",
        "Blue tones are known for their calming, serene qualities. Light blues can make spaces feel larger and more airy, while deeper blues create a sense of security and tranquility. Blue is an excellent choice for bedrooms and bathrooms where relaxation is the goal.",
        "Green connects us to nature and promotes feelings of balance and harmony. It's one of the most restful colors for the eyes and can reduce anxiety. Green works well in almost any room but is particularly effective in home offices where concentration is important.",
        "Yellow brings energy and optimism but should be used judiciously as too much can create feelings of frustration or anger. Soft yellows work well in kitchens and dining areas, where they can stimulate conversation and appetite.",
        "Red is stimulating and passionate but can also increase heart rate and energy levels. It's best used as an accent color in social spaces rather than areas meant for relaxation. In dining rooms, red can encourage appetite and conversation.",
        "Purple has long been associated with luxury and creativity. Lighter lavenders promote restfulness, while deeper purples can add drama and sophistication. Purple can work well in bedrooms or as accents in living spaces.",
        "Neutrals like white, gray, and beige create flexible backgrounds that allow other elements to shine. White promotes clarity and freshness but can feel cold without warming elements. Beiges and grays provide sophistication and calm but need contrast to avoid feeling flat.",
        "When creating your color scheme, consider the natural light in each room, the size of the space, and how you want to feel in that environment. Remember that color perception is influenced by texture, light, and surrounding colors, so always test samples in your actual space before committing.",
        "By thoughtfully selecting colors that align with your emotional goals for each space, you can create a home that not only looks beautiful but also supports your psychological well-being.",
      ],
    },
  ];
}

export function getBlogPostById(id: string) {
  return getBlogPosts().find((post) => post.id === id);
}

export function getRelatedBlogPosts(id: string) {
  const post = getBlogPostById(id);
  if (!post) return [];

  return getBlogPosts()
    .filter((p) => p.id !== id && p.category === post.category)
    .slice(0, 3);
}
