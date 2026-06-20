import {Component, CUSTOM_ELEMENTS_SCHEMA, inject} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import Swiper from "swiper";
import {interval} from "rxjs";
// @ts-ignore
import {DarkModeService} from "../../../services/dark-mode/dark-mode.service";

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './debug.html',
  styleUrl: './debug.scss'
})
export class Debug {

  isModalOpen: boolean = false;
  selectedProduct: { name: string; image: string; services: { name?: string; description: string }[] } =
    { name: '', image: '', services: [] };

  products = [
    {
      "name": "Precision Agriculture Technology",
      "image": "newLogo/5.jpg",
      "services": [
        {
          "title": "Precision Agriculture and Data Analytics",
          "description": "We integrate GPS, IoT sensors, drones, and data analytics to enhance farming efficiency. Our solutions enable real-time monitoring of soil conditions, crop health, and environmental variables, helping farmers make data-driven decisions."
        },
        {
          "title": "Optimized Resource Management",
          "description": "Our precision agriculture solutions improve water and fertilizer management through smart irrigation systems and variable rate technology (VRT). By applying resources only where needed, we enhance productivity while reducing costs and environmental impact."
        },
        {
          "title": "Pest and Disease Control",
          "description": "Using drones, high-resolution imaging, and AI-powered software, we help detect pests and diseases early. Targeted pesticide application ensures crop protection while minimizing chemical usage, reducing costs, and promoting sustainable farming."
        },
        {
          "title": "Economic and Environmental Sustainability",
          "description": "Our solutions reduce farming costs by optimizing resource usage and automating processes. By minimizing chemical waste, conserving water, and preserving soil health, we promote sustainable and profitable agricultural practices."
        },
        {
          "title": "Future-Ready Smart Farming",
          "description": "We leverage AI, machine learning, and blockchain to enhance predictive analytics, automate farming operations, and improve traceability. Our innovations support climate adaptation, ensuring long-term food security and agricultural sustainability."
        }
      ]
    },
    {
      "name": "Soil Analysis Services",
      "image": "newLogo/6.jpg",
      "services": [
        {
          "title": "Comprehensive Soil Testing and Analysis",
          "description": "We provide detailed soil testing services to assess nutrient levels, pH balance, organic matter, and microbial activity. Our analyses help farmers make informed decisions on fertilization and soil management strategies."
        },
        {
          "title": "Precision Soil Health Optimization",
          "description": "Our services enable farmers to optimize soil fertility by identifying nutrient deficiencies and pH imbalances. We offer customized soil amendment recommendations to enhance productivity while minimizing environmental impact."
        },
        {
          "title": "Contaminant Detection and Soil Safety",
          "description": "We conduct thorough soil contamination assessments to detect heavy metals, pesticide residues, and pollutants. Our solutions help ensure food safety and compliance with agricultural regulations."
        },
        {
          "title": "Cost-Effective and Sustainable Farming",
          "description": "By optimizing nutrient application and reducing excessive fertilizer use, we help farmers cut costs and prevent environmental pollution. Our sustainable soil management practices promote higher yields and long-term land conservation."
        },
        {
          "title": "Advanced Technology for Soil Monitoring",
          "description": "We leverage AI-driven analytics, IoT sensors, and remote sensing to provide real-time soil health monitoring. Our predictive insights assist in strategic farming decisions, ensuring higher productivity and environmental sustainability."
        }
      ]
    },
    {
      "name": "Post-Harvest Solutions",
      "image": "newLogo/7.webp",
      "services": [
        {
          "title": "Introduction to Post-Harvest Solutions",
          "description": "Post-harvest solutions are essential for preserving crop quality, reducing food waste, and ensuring maximum profitability for farmers. After harvesting, crops are highly susceptible to deterioration due to factors such as microbial activity, moisture loss, physical damage, and improper storage conditions. Implementing effective post-harvest management techniques helps maintain the freshness, nutritional value, and marketability of agricultural produce. Advanced post-harvest solutions, including proper drying, sorting, grading, storage, transportation, and packaging, help extend the shelf life of crops while reducing economic losses."
        },
        {
          "title": "Key Post-Harvest Techniques for Quality Preservation",
          "description": "One of the most critical steps in post-harvest management is drying and curing. Proper drying helps reduce moisture content in crops, preventing mold growth and spoilage. Sorting and grading are essential to maintaining quality standards in agricultural produce. Automated sorting machines use optical sensors and AI-driven algorithms to separate high-quality produce from defective ones. Cold storage units help maintain low temperatures, slowing down microbial activity and enzymatic processes that cause spoilage. Modified atmosphere packaging (MAP) extends the shelf life of perishable products by adjusting the gas composition within packaging materials."
        },
        {
          "title": "Economic and Environmental Benefits of Post-Harvest Solutions",
          "description": "Implementing effective post-harvest solutions offers significant economic benefits for farmers, agribusinesses, and consumers. By minimizing post-harvest losses, farmers can maximize their profits while ensuring a steady supply of high-quality produce. Efficient post-harvest handling translates into reduced waste and improved operational efficiency for agribusinesses. Reducing post-harvest losses contributes to sustainable food systems by minimizing resource wastage. AI-powered quality assessment tools, blockchain-based traceability systems, and smart packaging with real-time freshness indicators are set to revolutionize the industry."
        }
      ]
    },
    {
      "name": "Farmer Support Services",
      "image": "newLogo/8.webp",
      "services": [
        {
          "title": "Introduction to Farmer Support Services",
          "description": "Farmer Support Services are essential programs designed to assist farmers in improving productivity, financial stability, and sustainable agricultural practices. These services include access to credit, training programs, technical advisory services, government subsidies, and market linkages. Digital technology, mobile-based advisory platforms, AI-driven farming recommendations, and online marketplaces are transforming how farmers access information and connect with buyers."
        },
        {
          "title": "Types of Farmer Support Services and Their Impact",
          "description": "One of the most critical support services for farmers is access to financing and credit. Microfinance institutions, agricultural banks, and government-backed loan programs provide farmers with low-interest credit facilities. Training and capacity-building programs offer guidance on modern farming techniques. Digital platforms connect farmers with verified suppliers, reducing counterfeit products. Market linkages, contract farming arrangements, and online marketplaces help bridge the gap between farmers and buyers."
        },
        {
          "title": "Economic and Environmental Benefits of Farmer Support Services",
          "description": "Comprehensive farmer support services lead to increased productivity and higher incomes. By reducing financial barriers, these services enable farmers to invest in mechanization, irrigation systems, and improved seed varieties. Market access ensures stable revenue streams, reducing price volatility risks. Sustainable farming practices encouraged through these services help conserve soil, optimize resource use, and reduce environmental impact. Emerging technologies such as AI-driven agronomy models and smart contract-based financial solutions will further enhance these services."
        }
      ]
    },
    {
      "name": "Post-Harvest Solutions",
      "image": "newLogo/9.jpg",
      "services": [
        {
          "title": "Introduction to Post-Harvest Solutions",
          "description": "Post-harvest solutions are essential for preserving crop quality, reducing food waste, and ensuring maximum profitability for farmers. After harvesting, crops are highly susceptible to deterioration due to microbial activity, moisture loss, physical damage, and improper storage conditions. Implementing effective post-harvest management techniques helps maintain the freshness, nutritional value, and marketability of agricultural produce. Advanced post-harvest solutions, including proper drying, sorting, grading, storage, transportation, and packaging, help extend the shelf life of crops while reducing economic losses. The adoption of modern technologies such as cold storage units, controlled atmosphere storage, and automated sorting systems has revolutionized post-harvest management, ensuring better efficiency and sustainability in the supply chain."
        },
        {
          "title": "Drying and Curing",
          "description": "One of the most critical steps in post-harvest management is drying and curing. Proper drying helps reduce moisture content in crops, preventing mold growth and spoilage. For grains such as maize, rice, and wheat, mechanical dryers ensure uniform drying, reducing dependence on traditional sun-drying methods that are often inefficient and weather-dependent. In the case of root crops like onions and garlic, curing before storage enhances shelf life by forming a protective outer layer that prevents moisture loss."
        },
        {
          "title": "Sorting and Grading",
          "description": "Sorting and grading are essential to maintaining quality standards in agricultural produce. Automated sorting machines use optical sensors and AI-driven algorithms to separate high-quality produce from defective ones based on size, color, and shape. This process enhances market value and ensures that only premium products reach consumers. Grading systems help classify produce according to industry standards, enabling farmers to fetch better prices in competitive markets."
        },
        {
          "title": "Storage Solutions",
          "description": "Storage plays a crucial role in extending the lifespan of harvested crops. Cold storage units help maintain low temperatures, slowing down microbial activity and enzymatic processes that cause spoilage. Controlled atmosphere storage (CAS) regulates oxygen and carbon dioxide levels to slow down respiration in perishable fruits and vegetables, preserving their freshness for extended periods. Additionally, hermetic storage solutions such as airtight bags and silos protect grains from pests, moisture, and fungal infections without the need for chemical fumigation."
        },
        {
          "title": "Efficient Transportation and Packaging",
          "description": "Proper packaging prevents physical damage during handling and transit, reducing losses due to bruising and compression. Modified atmosphere packaging (MAP) extends the shelf life of perishable products by adjusting the gas composition within packaging materials. Refrigerated transport systems ensure that temperature-sensitive produce remains fresh from farm to market, reducing spoilage and enhancing food security."
        },
        {
          "title": "Economic and Environmental Benefits of Post-Harvest Solutions",
          "description": "Implementing effective post-harvest solutions offers significant economic benefits for farmers, agribusinesses, and consumers. By minimizing post-harvest losses, farmers can maximize their profits while ensuring a steady supply of high-quality produce in the market. Proper storage and packaging solutions also allow farmers to sell their crops at optimal times, avoiding price drops during peak harvest seasons and ensuring stable income generation. Reducing post-harvest losses contributes to sustainable food systems by minimizing resource wastage. By improving post-harvest efficiency, farmers can reduce their overall environmental footprint while ensuring more food reaches consumers."
        }
      ]
    },
    {
      "name": "Crop Protection Solutions",
      "image": "newLogo/10.webp",
      "services": [
        {
          "title": "Introduction to Crop Protection Solutions",
          "description": "Crop Protection Solutions are essential for safeguarding agricultural production from pests, diseases, and environmental threats. These solutions encompass a range of strategies, including chemical pesticides, biological controls, integrated pest management (IPM), and advanced monitoring technologies. By implementing effective crop protection measures, farmers can prevent yield losses, enhance crop quality, and maintain sustainable farming practices. Modern crop protection goes beyond traditional pesticide use. With advancements in agricultural science, farmers now have access to eco-friendly alternatives such as biopesticides, resistant crop varieties, and precision application technologies. By leveraging these innovations, crop protection efforts become more targeted, reducing environmental impact while maximizing effectiveness."
        },
        {
          "title": "Strategies for Effective Crop Protection",
          "description": "One of the most effective crop protection strategies is Integrated Pest Management (IPM), which combines biological, cultural, mechanical, and chemical methods to control pests in a sustainable manner. IPM minimizes reliance on chemical pesticides by using techniques such as crop rotation, natural predators, and habitat management to reduce pest populations. Biological control methods involve using natural enemies such as predatory insects, fungi, or bacteria to manage pest populations. Additionally, genetic advancements have led to the development of pest-resistant crop varieties. Technology-driven crop protection solutions, such as drones, remote sensing, and AI-powered analytics, enable farmers to detect early signs of pest infestations or disease outbreaks. Precision spraying technologies ensure treatments are applied only to affected areas, reducing waste and limiting environmental exposure."
        },
        {
          "title": "Economic and Environmental Benefits of Crop Protection",
          "description": "Investing in crop protection solutions leads to significant economic benefits by reducing yield losses and improving crop quality. Effective pest and disease management ensures higher productivity, increasing profitability for farmers. Sustainable crop protection minimizes the negative impact of chemical use on soil, water, and biodiversity. IPM and biological control methods contribute to maintaining healthy ecosystems by reducing pesticide runoff and preserving beneficial organisms. The future of crop protection is increasingly data-driven, with AI and predictive analytics offering new ways to enhance pest and disease management. Innovations such as automated pest detection systems, AI-driven forecasting models, and gene-editing technologies are revolutionizing the agricultural sector."
        }
      ]
    },
    {
      "name": "Weather Monitoring Tools",
      "image": "newLogo/11.jpg",
      "services": [
        {
          "title": "Introduction to Weather Monitoring Tools",
          "description": "Weather Monitoring Tools play a critical role in modern agriculture by providing real-time data on climatic conditions such as temperature, humidity, precipitation, wind speed, and atmospheric pressure. These tools enable farmers to make informed decisions regarding irrigation, planting schedules, pest control, and overall farm management. By accurately predicting weather patterns, farmers can mitigate risks associated with droughts, storms, excessive rainfall, or temperature fluctuations, thereby improving crop yields and reducing financial losses. With advancements in technology, weather monitoring has become more precise and accessible, with smart sensors, IoT-enabled devices, and satellite-based monitoring systems providing real-time updates and long-term forecasts."
        },
        {
          "title": "Types of Weather Monitoring Tools and Their Functions",
          "description": "Various weather monitoring tools assist farmers in tracking climatic conditions and making informed agricultural decisions. Automated weather stations (AWS) are equipped with sensors to measure temperature, humidity, rainfall, wind speed, and solar radiation, transmitting real-time data to cloud-based systems for analysis. Satellite-based weather monitoring systems provide large-scale climate data, helping predict regional weather patterns and track hurricanes, droughts, and rainfall distribution. IoT-enabled weather sensors offer localized and high-resolution data, enabling site-specific decision-making. Mobile applications and AI-powered weather prediction platforms aggregate data from multiple sources to generate highly accurate forecasts and predictive insights."
        },
        {
          "title": "Economic and Environmental Benefits of Weather Monitoring Tools",
          "description": "Investing in weather monitoring tools provides significant economic benefits by reducing agricultural risks and improving resource efficiency. Accurate weather data enables farmers to plan their planting and harvesting schedules effectively, minimizing crop losses due to unexpected weather changes. From an environmental perspective, weather monitoring tools contribute to sustainable agriculture by promoting efficient resource use. Real-time weather data helps prevent over-irrigation, conserving water resources and reducing soil erosion. Predicting pest and disease outbreaks linked to weather conditions allows for targeted treatments, reducing pesticide overuse. As technology evolves, AI and machine learning models will improve forecasting accuracy, while IoT-enabled devices will provide real-time hyperlocal weather insights."
        }
      ]
    }



  ];


  openModal(index: number) {
    this.selectedProduct = this.products[index];
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  themeService = inject(DarkModeService);
  currentSlide = 0;
  startZoom = false;

  constructor() {
    this.startZoom = false;
    setTimeout(() => {
      this.startZoom = true;
    }, 5)

    interval(5000).subscribe((c) => {
      this.currentSlide = (c + 1) % 3;
      this.startZoom = false;
      setTimeout(() => {
        this.startZoom = true;
      }, 5)
    })

  }
  submit() {
    alert('sent successfully')
  }



  swiperMain: any;

  swiperMainChanged(event: any) {
    if (this.swiperMain === undefined) return
    this.swiperMain.slideTo(event.activeIndex)
    console.log('slider changed thumb');
  }




  ngAfterViewInit() {


    this.swiperMain = new Swiper('.js-swiper-main', {
      autoplay: true,
      "slidesPerView": 1,
      "spaceBetween": 24,
      "pagination": {
        "el": ".swiper-pagination",
        "clickable": true
      },
      "breakpoints": {
        "560": {
          "slidesPerView": 2
        },
        "960": {
          "slidesPerView": 3
        }
      }
    });
  }

}
