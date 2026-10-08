/* VN Healthy Living Medical Group - WebMCP read-only tools (normal version)
   Early-preview API: runs only in browsers that expose navigator.modelContext (or document.modelContext).
   Tools are read-only, return static public practice information, and never book, collect or send patient data. */
(function () {
  'use strict';
  var mc = (typeof navigator !== 'undefined' && navigator.modelContext) ||
           (typeof document !== 'undefined' && document.modelContext);
  if (!mc || typeof mc.registerTool !== 'function') { return; }

  var PHONE = '(619) 429-7700';
  var CLOSING = 'Call VNHL at ' + PHONE + ' to clarify your specific plan.';
  var INSURANCE = {
    'private': 'For most private insurance, we accept Aetna, Humana, United Healthcare, Cigna, and many more.',
    'original_medicare': 'For Medicare, we accept Original Medicare with or without a supplement.',
    'medicare_advantage': 'For Medicare Advantage, we accept only Sharp-SCMG Advantage plans.'
  };
  var SERVICES = {
    senior_wellness: 'Senior Wellness: Medicare Annual Wellness Visits (typically $0 co-pay for eligible Medicare patients), preventive screenings, medication review, and chronic condition management.',
    primary_care: 'Primary care for adults 18+: annual physicals, diabetes, hypertension and high cholesterol management, acute illness visits, on-site blood work, and anxiety and depression screening.',
    weight_management: 'Medical Weight Management: physician-supervised programs, including GLP-1 therapy when appropriate. Medicare members, including Medicare Advantage members, may be eligible for the Medicare GLP-1 Bridge Program; call to review eligibility.',
    languages: 'Bilingual care in English and Spanish (Hablamos Espanol).'
  };

  function reply(text) { return { content: [{ type: 'text', text: text }] }; }

  var tools = [
    {
      name: 'check_insurance_acceptance',
      description: 'Answer whether VN Healthy Living (Dr. K) accepts a type of insurance: private insurance, Original Medicare, or Medicare Advantage.' Always tells the patient to call the office to confirm their specific plan.',
      inputSchema: {
        type: 'object',
        properties: {
          plan_type: { type: 'string', enum: ['private', 'original_medicare', 'medicare_advantage', 'all'], description: 'Type of coverage the patient has. Use "all" for a full summary.' }
        },
        required: ['plan_type']
      },
      annotations: { readOnlyHint: true },
      execute: async function (input) {
        var t = (input && input.plan_type) || 'all';
        var body = (t === 'all') ? [INSURANCE['private'], INSURANCE['original_medicare'], INSURANCE['medicare_advantage']].join(' ') : (INSURANCE[t] || '');
        if (!body) { body = 'We accept many plans.'; }
        return reply(body + ' ' + CLOSING);
      }
    },
    {
      name: 'get_hours_and_location',
      description: 'Get the address, phone number, office hours and public transit for VN Healthy Living Medical Group in Imperial Beach, CA.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: async function () {
        return reply('VN Healthy Living Medical Group, 707 Palm Ave, Imperial Beach, CA 91932 (next to the Hampton Inn & Suites, corner of Palm Ave and 7th). ' +
          'Phone ' + PHONE + '. Hours: Monday to Thursday 8:00 AM to 5:00 PM; Friday 8:00 AM to 12:00 PM. Public transit: MTS Bus Routes 933 and 934.');
      }
    },
    {
      name: 'how_to_schedule',
      description: 'Explain how a new or current patient schedules an appointment with Dr. K. Scheduling is by phone only; this tool does not book appointments.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: async function () {
        return reply('Call VNHL at ' + PHONE + ' during office hours (Monday to Thursday 8:00 AM to 5:00 PM; Friday 8:00 AM to 12:00 PM). ' +
          'Dr. K welcomes new adult patients age 18 and older. New patients are typically seen within 1 to 3 business days, and same-day sick visits are often available when you call early. ' +
          'Online booking is not available.');
      }
    },
    {
      name: 'get_services',
      description: 'Describe the services offered by Dr. K at VN Healthy Living: senior wellness, primary care, medical weight management, and languages spoken.',
      inputSchema: {
        type: 'object',
        properties: { category: { type: 'string', enum: ['all', 'senior_wellness', 'primary_care', 'weight_management', 'languages'], description: 'Service category, or "all".' } },
        required: ['category']
      },
      annotations: { readOnlyHint: true },
      execute: async function (input) {
        var c = (input && input.category) || 'all';
        var out = (c === 'all') ? Object.keys(SERVICES).map(function (k) { return SERVICES[k]; }).join(' ') : (SERVICES[c] || SERVICES.primary_care);
        return reply(out + ' For questions about your specific situation, call ' + PHONE + '.');
      }
    }
  ];

  tools.forEach(function (tool) {
    try { Promise.resolve(mc.registerTool(tool)).catch(function () {}); } catch (e) { /* already registered or blocked by policy */ }
  });
})();
