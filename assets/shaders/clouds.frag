{
  "sksl": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform float iTime;\nuniform vec2 uResolution;\n\nvec4 fragColor;\n\nfloat FLT_flutter_local_rand(vec2 co)\n{\n    return fract(sin(dot(co, vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875);\n}\n\nfloat FLT_flutter_local_baseNoise(vec2 st)\n{\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n    vec2 param = i;\n    float a = FLT_flutter_local_rand(param);\n    vec2 param_1 = i + vec2(1.0, 0.0);\n    float b = FLT_flutter_local_rand(param_1);\n    vec2 param_2 = i + vec2(0.0, 1.0);\n    float c = FLT_flutter_local_rand(param_2);\n    vec2 param_3 = i + vec2(1.0);\n    float d = FLT_flutter_local_rand(param_3);\n    vec2 u = (f * f) * (vec2(3.0) - (f * 2.0));\n    return (mix(a, b, u.x) + (((c - a) * u.y) * (1.0 - u.x))) + (((d - b) * u.x) * u.y);\n}\n\nfloat FLT_flutter_local_noise(vec2 st)\n{\n    float noiseVal = 0.0;\n    float amplitude = 0.5;\n    float frequency = 1.0;\n    for (int i = 0; i < 3; i++)\n    {\n        vec2 param = st * frequency;\n        noiseVal += (amplitude * FLT_flutter_local_baseNoise(param));\n        amplitude *= 0.5;\n        frequency *= 2.0;\n    }\n    return noiseVal;\n}\n\nvoid FLT_main()\n{\n    vec2 uv = flutter_FragCoord.xy / vec2(1000.0, 500.0);\n    vec2 param_1 = (uv * 0.100000001490116119384765625) - vec2(iTime * 0.00999999977648258209228515625);\n    uv += vec2(FLT_flutter_local_noise(param_1) * 0.1500000059604644775390625);\n    vec2 param_2 = (uv * 10.0) - vec2(iTime * 0.0500000007450580596923828125);\n    float n = FLT_flutter_local_noise(param_2);\n    float shadowAlpha = smoothstep(0.5, 0.800000011920928955078125, n);\n    vec3 shadowColor = vec3(0.0);\n    shadowAlpha *= 0.300000011920928955078125;\n    fragColor = vec4(shadowColor, shadowAlpha);\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
  "stage": 1,
  "target_platform": 2,
  "uniforms": [
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 0,
      "name": "iTime",
      "rows": 1,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 1,
      "name": "uResolution",
      "rows": 2,
      "type": 10
    }
  ]
}