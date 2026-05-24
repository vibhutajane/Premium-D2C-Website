/* 
 * AETHERIS - Core Interactive Application Engine
 * Premium D2C Experience Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  
  /* ==========================================
     1. SCROLL REVEAL VIEWPORT OBSERVER
     ========================================== */
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // If it's the science dashboard, trigger the column height animation
        if (entry.target.classList.contains('science-dashboard') || entry.target.id === 'science') {
          triggerChartBarAnimations();
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ==========================================
     2. INTERACTIVE DEVICE HOTSPOTS
     ========================================== */
  const hotspotPins = document.querySelectorAll('.hotspot-pin');
  const infoCards = document.querySelectorAll('.info-card');

  // Hotspot pin click handler
  hotspotPins.forEach(pin => {
    pin.addEventListener('click', () => {
      const targetId = pin.getAttribute('data-target');
      
      // Toggle active states on info cards
      infoCards.forEach(card => {
        if (card.id === targetId) {
          card.classList.add('active');
          // Scroll card slightly into view if needed (on mobile)
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          card.classList.remove('active');
        }
      });
      
      // Update active pin look
      updateActivePin(pin);
    });
  });

  // Info card click handler
  infoCards.forEach(card => {
    card.addEventListener('click', () => {
      infoCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      // Find matching pin
      const pinClass = card.getAttribute('data-pin');
      const matchingPin = document.querySelector(`.${pinClass}`);
      if (matchingPin) {
        updateActivePin(matchingPin);
      }
    });
  });

  function updateActivePin(activePin) {
    hotspotPins.forEach(pin => {
      pin.style.transform = 'scale(1)';
      pin.querySelector('::before') ? pin.querySelector('::before').style.background = '#fff' : null;
    });
    activePin.style.transform = 'scale(1.2)';
  }

  /* ==========================================
     3. MITOCHONDRIA BIO-SIMULATOR
     ========================================== */
  const simPanel = document.getElementById('simulation-panel');
  const simBtn = document.getElementById('simulation-activation-btn');
  const simBtnLabel = document.getElementById('control-btn-label');
  const metricMito = document.getElementById('metric-mitochondria');
  const metricAtp = document.getElementById('metric-atp');
  const indMito = document.getElementById('ind-mitochondria');
  const indAtp = document.getElementById('ind-atp');
  const systemDot = document.getElementById('system-status-dot');
  const systemText = document.getElementById('sync-text');

  simBtn.addEventListener('click', () => {
    const isActive = simPanel.classList.toggle('active');
    
    if (isActive) {
      // Dynamic shift to high-recovery state
      simBtnLabel.innerText = "Shield Energized: Active";
      metricMito.innerHTML = "320% <span style='font-size: 0.9rem; color: hsla(142, 70%, 45%, 1); font-weight: 500;'>(Accelerated)</span>";
      metricAtp.innerHTML = "4.2x <span style='font-size: 0.9rem; color: hsla(142, 70%, 45%, 1); font-weight: 500;'>(Maximized)</span>";
      
      indMito.innerText = "REJUVENATING";
      indMito.className = "sim-metric-indicator indicator-up";
      
      indAtp.innerText = "OPTIMIZED";
      indAtp.className = "sim-metric-indicator indicator-up";
      
      // Update system navbar header status
      systemDot.className = "status-dot connected";
      systemText.innerText = "AETHERIS ACTIVE: ENERGIZED";
      
      // Generate additional floating ATP particles
      generateATPBurs();
    } else {
      // Reset to baseline
      simBtnLabel.innerText = "Activate Cellular Shield";
      metricMito.innerText = "100% (Baseline)";
      metricAtp.innerText = "1.0x (Standard)";
      
      indMito.innerText = "NORMAL";
      indMito.className = "sim-metric-indicator";
      
      indAtp.innerText = "STABLE";
      indAtp.className = "sim-metric-indicator";
      
      systemDot.className = "status-dot connected";
      systemText.innerText = "AETHERIS ACTIVE: CONNECTED";
    }
  });

  function generateATPBurs() {
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'atp-particle';
      particle.style.left = `${Math.random() * 90 + 5}%`;
      particle.style.animation = `riseATP ${Math.random() * 2 + 2}s infinite linear`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particle.style.background = Math.random() > 0.5 ? 'hsla(356, 100%, 59%, 0.8)' : 'hsla(30, 100%, 50%, 0.8)';
      simPanel.appendChild(particle);
      
      // Auto clean up after simulation stops
      setTimeout(() => {
        if (!simPanel.classList.contains('active')) {
          particle.remove();
        }
      }, 5000);
    }
  }

  /* ==========================================
     4. CLINICAL DATA SCIENCE DASHBOARD
     ========================================== */
  const scienceTabs = document.querySelectorAll('.tab-btn');
  const chartTitle = document.getElementById('chart-title');
  const clinicalHeading = document.getElementById('clinical-heading');
  const clinicalParagraph = document.getElementById('clinical-paragraph');
  const proofNum1 = document.getElementById('proof-num-1');
  const proofLabel1 = document.getElementById('proof-label-1');
  const proofNum2 = document.getElementById('proof-num-2');
  const proofLabel2 = document.getElementById('proof-label-2');
  
  // Data vectors for dynamic transitions
  const scienceData = {
    sleep: {
      title: "Deep Sleep Duration Improvement",
      heading: "Mitochondrial Alignment of Circadian Rhythms",
      paragraph: "Targeted red light exposure prior to sleep stimulates natural systemic melatonin secretion without chemical aids. By regulating bio-photonic sleep cues, clinical subjects showed a critical increase in sustained deep sleep stages, improving recovery indices by over 90% in 4 weeks.",
      metrics: ["+48m", "Deep REM Extension", "-22%", "Morning Cortisol Spike"],
      bars: [78, 84, 90, 95]
    },
    recovery: {
      title: "Athletic Muscle Oxygenation Index",
      heading: "Accelerated Lymphatic Clearance & Repair",
      paragraph: "Deep penetrating near-infrared (850nm) light stimulates cellular cytochrome C oxides in muscle tissue. This triggers microcirculation, rapidly expelling lactic acid accumulation and speeding up raw fiber protein reconstruction by over 2.5x compared to standard passive rest.",
      metrics: ["-58%", "Lactic Acid Hold Time", "+140%", "Sustained ATP Yield"],
      bars: [62, 75, 88, 98]
    },
    aging: {
      title: "Dermal Collagen Thickness Density",
      heading: "Systemic Bio-Stimulated Fibroblast Synthesis",
      paragraph: "Deep 660nm ruby waves directly stimulate target dermal fibroblasts, the cells responsible for structural elasticity. Over a 30-day double-blind clinical study, density of active collagen fibers improved continuously, resulting in highly measurable anti-aging and skin smoothing indices.",
      metrics: ["+82%", "Active Collagen Density", "-35%", "Visual Fine Lines Reduction"],
      bars: [45, 60, 72, 85]
    }
  };

  scienceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Toggle tab button classes
      scienceTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const key = tab.getAttribute('data-target');
      const data = scienceData[key];
      
      // Transition elements with a subtle fade out-in effect
      chartTitle.style.opacity = '0';
      clinicalHeading.style.opacity = '0';
      clinicalParagraph.style.opacity = '0';
      
      setTimeout(() => {
        chartTitle.innerText = data.title;
        clinicalHeading.innerText = data.heading;
        clinicalParagraph.innerText = data.paragraph;
        
        proofNum1.innerText = data.metrics[0];
        proofLabel1.innerText = data.metrics[1];
        proofNum2.innerText = data.metrics[2];
        proofLabel2.innerText = data.metrics[3];
        
        chartTitle.style.opacity = '1';
        clinicalHeading.style.opacity = '1';
        clinicalParagraph.style.opacity = '1';
        
        // Trigger bar transition
        animateChartBars(data.bars);
      }, 200);
    });
  });

  function triggerChartBarAnimations() {
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
      const key = activeTab.getAttribute('data-target');
      animateChartBars(scienceData[key].bars);
    }
  }

  function animateChartBars(heights) {
    const bars = document.querySelectorAll('.data-bar.bar-active');
    bars.forEach((bar, idx) => {
      bar.style.height = '0%';
      setTimeout(() => {
        bar.style.height = `${heights[idx]}%`;
      }, 50 + (idx * 50)); // Stagger bar rises
    });
  }

  /* ==========================================
     5. DYNAMIC TREATMENT PLANNER QUIZ
     ========================================== */
  const quizSteps = document.querySelectorAll('.quiz-step');
  const nextBtn = document.getElementById('quiz-next-btn');
  const backBtn = document.getElementById('quiz-back-btn');
  const quizProgress = document.getElementById('quiz-progress-indicator');
  const quizSlider = document.getElementById('quiz-slider-hours');
  const sliderHoursVal = document.getElementById('slider-hours-val');
  
  let currentStep = 1;
  const quizData = {
    objective: 'sleep',
    hours: 8,
    familiarity: 1
  };

  // Slider change callback
  quizSlider.addEventListener('input', (e) => {
    quizData.hours = parseInt(e.target.value);
    sliderHoursVal.innerText = `${quizData.hours} HOURS`;
  });

  // Step 1 & 3 Option choices callback
  document.querySelectorAll('.quiz-step .option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parentStep = btn.closest('.quiz-step');
      const stepNum = parentStep.getAttribute('data-step');
      
      // Clear selections in the current step
      parentStep.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      
      // Update choice state
      const val = btn.getAttribute('data-value');
      if (stepNum === '1') {
        quizData.objective = val;
      } else if (stepNum === '3') {
        quizData.familiarity = parseInt(val);
      }
    });
  });

  // Next step click callback
  nextBtn.addEventListener('click', () => {
    if (currentStep < 3) {
      currentStep++;
      updateQuizSteps();
    } else if (currentStep === 3) {
      currentStep++;
      calculateQuizResults();
      updateQuizSteps();
    }
  });

  // Back step click callback
  backBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateQuizSteps();
    }
  });

  function updateQuizSteps() {
    quizSteps.forEach(step => {
      const stepNum = parseInt(step.getAttribute('data-step'));
      stepNum === currentStep ? step.classList.add('active') : step.classList.remove('active');
    });

    // Update progress bar percentage
    const percent = currentStep * 25;
    quizProgress.style.width = `${percent}%`;

    // Manage buttons look
    if (currentStep === 1) {
      backBtn.style.visibility = 'hidden';
      nextBtn.innerText = "Next Step ▶";
    } else if (currentStep === 3) {
      backBtn.style.visibility = 'visible';
      nextBtn.innerText = "Calculate Protocol ▶";
    } else if (currentStep === 4) {
      // Hide standard footer controls when showing results
      document.getElementById('quiz-footer-actions').style.display = 'none';
    } else {
      backBtn.style.visibility = 'visible';
      nextBtn.innerText = "Next Step ▶";
    }
  }

  function calculateQuizResults() {
    // Generate scores based on user choices
    let score = 65; // base score
    score += quizData.familiarity * 5;
    score += Math.round(quizData.hours * 1.8);
    score = Math.min(score, 98); // Max cap

    // Update HTML scores
    document.getElementById('results-score-num').innerText = `${score}%`;
    
    // Set up circular SVG animation
    const circleFill = document.getElementById('results-circle-progress');
    const circumference = 440; // 2 * pi * r (r=70)
    const strokeOffset = circumference - (score / 100) * circumference;
    
    // Delay slightly to trigger visual stroke transition
    setTimeout(() => {
      circleFill.style.strokeDashoffset = strokeOffset;
    }, 300);

    // Custom text configurations depending on objectives
    const recTitle = document.getElementById('results-recommendation-title');
    const routineHeadline = document.getElementById('results-routine-headline');
    const routineDesc = document.getElementById('results-routine-desc');
    const claimBtn = document.getElementById('claim-protocol-btn');

    if (quizData.objective === 'sleep') {
      recTitle.innerText = "Aetheris Halo Sync Bundle";
      routineHeadline.innerText = "The Circadian Melatonin Reset Protocol";
      routineDesc.innerText = `To optimize your ${score}% biometric deficiency, expose face & upper chest to 660nm Deep Red light for 12 minutes at 7:30 AM (resets biological clock), followed by 8 minutes of low-intensity 850nm NIR light at 9:00 PM to stimulate natural melatonin cycles.`;
      
      claimBtn.setAttribute('data-id', 'aetheris-halo');
      claimBtn.setAttribute('data-name', 'Aetheris Halo Sync Bundle');
      claimBtn.setAttribute('data-price', '98890');
      claimBtn.setAttribute('data-desc', 'Halo Panel + Circadian Sync Protocol License');
    } else if (quizData.objective === 'recovery') {
      recTitle.innerText = "Aetheris Studio Pro Array";
      routineHeadline.innerText = "The Kinetic Athletic Recovery Reload";
      routineDesc.innerText = `Your ${score}% metabolic load requires intense recovery. Prior to workouts, expose leg/torso muscle groups to Aetheris NIR light for 10 minutes (activates vasodilatation). Post-workout, execute a 15-minute multi-wavelength session to rapidly clear interstitial lactic buildup.`;
      
      claimBtn.setAttribute('data-id', 'aetheris-pro');
      claimBtn.setAttribute('data-name', 'Aetheris Studio Pro Array');
      claimBtn.setAttribute('data-price', '197890');
      claimBtn.setAttribute('data-desc', 'Tri-panel Array + Kinetic Recovery Protocol License');
    } else if (quizData.objective === 'skin') {
      recTitle.innerText = "Aetheris Node Beauty Pack";
      routineHeadline.innerText = "The Dermal Fibroblast Collagen Sequence";
      routineDesc.innerText = `For skin optimization (${score}% targeted score), apply 660nm pure ruby red wavelengths closely to targeted facial zones for 8 minutes daily. Stimulates deep fibroblast synthesis, expanding localized skin elasticity and resolving micro-wrinkle margins.`;
      
      claimBtn.setAttribute('data-id', 'aetheris-node');
      claimBtn.setAttribute('data-name', 'Aetheris Node Beauty Pack');
      claimBtn.setAttribute('data-price', '49390');
      claimBtn.setAttribute('data-desc', 'Spot Node + Collagen Sequence License');
    } else {
      recTitle.innerText = "Aetheris Halo Rejuvenator";
      routineHeadline.innerText = "The Cortisol Modulation Spark";
      routineDesc.innerText = `To counteract cognitive depletion, execute a 10-minute full-body Aetheris Halo session immediately upon waking at 6:30 AM. Modulates natural cortisol morning curves, improving deep cognitive focus indices throughout the active day by over 40%.`;
      
      claimBtn.setAttribute('data-id', 'aetheris-halo');
      claimBtn.setAttribute('data-name', 'Aetheris Halo Rejuvenator');
      claimBtn.setAttribute('data-price', '899');
      claimBtn.setAttribute('data-desc', 'Halo Panel + Cognitive protocol access');
    }
  }

  // Claim button dynamic cart integrations
  const claimBtn = document.getElementById('claim-protocol-btn');
  claimBtn.addEventListener('click', () => {
    const item = {
      id: claimBtn.getAttribute('data-id'),
      name: claimBtn.getAttribute('data-name'),
      price: parseInt(claimBtn.getAttribute('data-price')),
      desc: claimBtn.getAttribute('data-desc')
    };
    
    addItemToCart(item);
  });

  /* ==========================================
     6. SLIDING CART DRAWER SYSTEM
     ========================================== */
  const cartDrawer = document.getElementById('cart-drawer-sidebar');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartToggleBtn = document.getElementById('cart-drawer-toggle');
  const cartCloseBtn = document.getElementById('cart-drawer-close');
  const cartCountBadge = document.getElementById('cart-count-badge');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartTotalPrice = document.getElementById('cart-total-price');
  const checkoutBtn = document.getElementById('checkout-cta-btn');

  let cart = [];

  // Open/Close toggle clicks
  cartToggleBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
  }

  function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  }

  // Bind add-to-cart clicks from the pricing grid
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = {
        id: btn.getAttribute('data-id'),
        name: btn.getAttribute('data-name'),
        price: parseInt(btn.getAttribute('data-price')),
        desc: btn.getAttribute('data-desc')
      };
      
      addItemToCart(item);
    });
  });

  function addItemToCart(item) {
    const existing = cart.find(c => c.id === item.id);
    
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...item, qty: 1 });
    }
    
    updateCartUI();
    openCart(); // Auto slide open cart
  }

  function updateCartUI() {
    // Calculate total count
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountBadge.innerText = totalCount;

    // Build items HTML list
    if (cart.length === 0) {
      cartItemsList.innerHTML = `<div class="empty-cart-msg">Your active cell-recovery array is empty.</div>`;
      cartTotalPrice.innerText = "₹0 INR";
      return;
    }

    cartItemsList.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
      const itemCost = item.price * item.qty;
      subtotal += itemCost;
      
      const cartItemHTML = `
        <div class="cart-item">
          <img src="assets/hero_device.png" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-name">${item.name}</h4>
            <p class="cart-item-desc">${item.desc}</p>
            <div class="cart-item-row">
              <span class="cart-item-price">₹${item.price} x ${item.qty}</span>
              <button class="remove-item-btn" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
      cartItemsList.insertAdjacentHTML('beforeend', cartItemHTML);
    });

    cartTotalPrice.innerText = `₹${subtotal} INR`;

    // Bind remove button clicks
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        removeItemFromCart(id);
      });
    });
  }

  function removeItemFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
  }

  // Checkout button simulation
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Choose a rejuvenation tier first!");
      return;
    }
    
    alert("🔒 SECURE CONNECTION INITIATED\n\nInitializing secure mitochondrial cellular portal. Establishing encrypted payment gateways... Welcome to the Aetheris Bio Network!");
    
    // Clear cart drawer as simulation finishes
    cart = [];
    updateCartUI();
    closeCart();
  });

});
